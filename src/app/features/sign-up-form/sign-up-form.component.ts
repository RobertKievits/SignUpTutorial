import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { mustContainLowercaseAndUppercase, passwordDoesNotContainFirstNameOrLastName, validEmail } from '../../shared/validators';
import { SignupFormGroup } from './interfaces/sign-up-form.interface';
import { InputComponent } from '../../shared/components';
import { SignUpService } from './services/sign-up.service';
import { SignUpData } from './interfaces';
import { take } from 'rxjs';

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

    constructor(private signUpService: SignUpService) {}

    /**
     * Angular lifecycle hook.
     * Create sign-up form on init
     */
    public ngOnInit(): void {
        this.createForm();
    }

    /**
     * Submit form
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
                    next: () => {},
                    // this.toastService.showToast({
                    //     message: 'Your sign-up data was successfully submitted',
                    //     type: ToastEvents.SUCCESS,
                    //     title: 'Sign-up submitted'
                    // }),
                    error: () => {}
                    // this.toastService.showToast({
                    //     message: 'Sing-up went wrong. Please try agin later',
                    //     type: ToastEvents.ERROR,
                    //     title: 'Something went wrong'
                    // })
                });
        }
    }

    /**
     * Create base sign up form component
     */
    private createForm(): void {
        this.signUpForm = new FormGroup(
            {
                firstName: new FormControl('', [Validators.required]),
                lastName: new FormControl('', [Validators.required]),
                email: new FormControl('', [Validators.required, validEmail()]),
                password: new FormControl('', [Validators.required, Validators.minLength(8), mustContainLowercaseAndUppercase()])
            },
            {
                validators: [passwordDoesNotContainFirstNameOrLastName()]
            }
        );

        this.signUpForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
            this.fullName = `${value.firstName} ${value.lastName}`;
        });
    }

    private validateForm(): void {
        this.signUpForm.markAllAsTouched();
        Object.keys(this.signUpForm.controls).forEach((key) => {
            this.signUpForm.get(key)?.markAsDirty();
        });
    }
}
