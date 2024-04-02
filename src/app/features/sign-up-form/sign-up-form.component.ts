import { InputComponent, ToastEvents, ToastService } from '@components';
import { mustContainLowercaseAndUppercase, passwordDoesNotContainFirstNameOrLastName, validEmail } from '@validators';

import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { take } from 'rxjs';

import { SignupFormGroup } from './interfaces';
import { SignUpService } from './services';

@Component({
    selector: 'fed-sign-up-form',
    standalone: true,
    imports: [ReactiveFormsModule, InputComponent],
    providers: [SignUpService],
    templateUrl: './sign-up-form.component.html',
    styleUrl: './sign-up-form.component.scss'
})
export class SignUpFormComponent implements OnInit {
    /**
     * Signup form
     */
    public signUpForm: FormGroup<SignupFormGroup>;

    /**
     * Combined first and last name
     */
    public fullName: string;

    private destroyRef = inject(DestroyRef);

    constructor(
        private toastService: ToastService,
        private signUpService: SignUpService
    ) {}

    /**
     * Angular lifecycle hook.
     * Create sign-up form on init
     */
    public ngOnInit(): void {
        this.createForm();
    }

    /**
     * Submit form and show toast on error or success
     */
    public onSubmit(): void {
        this.validateForm();

        if (this.signUpForm.valid) {
            this.signUpService
                .signUp({
                    firstName: this.signUpForm.value.firstName as string,
                    lastName: this.signUpForm.value.lastName as string,
                    email: this.signUpForm.value.email as string
                })
                .pipe(take(1))
                .subscribe({
                    next: () => {
                        this.toastService.showToast({
                            message: 'Your sign-up data was successfully submitted',
                            type: ToastEvents.SUCCESS,
                            title: 'Sign-up submitted'
                        });
                    },
                    error: () => {
                        this.toastService.showToast({
                            message: 'Sing-up went wrong. Please try agin later',
                            type: ToastEvents.ERROR,
                            title: 'Something went wrong'
                        });
                    }
                });
        }
    }

    /**
     * Create base sign up form component
     */
    private createForm(): void {
        this.signUpForm = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, validEmail()]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                mustContainLowercaseAndUppercase(),
                passwordDoesNotContainFirstNameOrLastName()
            ])
        });

        this.signUpForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
            this.fullName = `${value.firstName} ${value.lastName}`;
        });
    }

    /**
     * Set all form controls to touched and dirty state
     */
    private validateForm(): void {
        this.signUpForm.markAllAsTouched();
        Object.keys(this.signUpForm.controls).forEach((key) => {
            this.signUpForm.get(key)?.markAsDirty();
        });
    }
}
