import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SignUpService } from './services/sign-up.service';
import { SignUpFormComponent } from './sign-up-form.component';

describe('SignUpFormComponent', () => {
    let component: SignUpFormComponent;
    let fixture: ComponentFixture<SignUpFormComponent>;
    const signUpServiceSpy = jasmine.createSpyObj('SignUpService', { signUp: of() });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SignUpFormComponent]
        })
            .overrideComponent(SignUpFormComponent, {
                add: {
                    providers: [
                        {
                            provide: SignUpService,
                            useValue: signUpServiceSpy
                        }
                    ]
                },
                remove: { providers: [SignUpService] }
            })
            .compileComponents();

        fixture = TestBed.createComponent(SignUpFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('generates form on init', () => {
        expect(component.signUpForm).toBeDefined();
    });

    describe('onSubmit', () => {
        it('validates all form controls', () => {
            const submitButton = fixture.debugElement.nativeElement.querySelector('[data-testid="submit-button"]');
            signUpServiceSpy.signUp.calls.reset();

            // Act
            submitButton.click();

            // Assert
            expect(component.signUpForm.valid).toEqual(false);
            Object.keys(component.signUpForm.controls).forEach((key) => {
                const control = component.signUpForm.get(key);
                expect(control?.touched).toEqual(true);
                expect(control?.dirty).toEqual(true);
                expect(control?.valid).toEqual(false);
            });
        });

        it('does not submit if invalid', () => {
            const submitButton = fixture.debugElement.nativeElement.querySelector('[data-testid="submit-button"]');
            signUpServiceSpy.signUp.calls.reset();

            // Act
            component.signUpForm.patchValue({
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            });
            submitButton.click();

            // Assert
            expect(component.signUpForm.valid).toEqual(false);
            expect(signUpServiceSpy.signUp).not.toHaveBeenCalled();
        });

        it('submits if valid', () => {
            const submitButton = fixture.debugElement.nativeElement.querySelector('[data-testid="submit-button"]');
            signUpServiceSpy.signUp.calls.reset();

            // Act
            component.signUpForm.patchValue({
                firstName: 'Test',
                lastName: 'McTester',
                email: 'test@test.com',
                password: 'Bla1Bla1'
            });
            submitButton.click();

            // Assert
            expect(component.signUpForm.valid).toEqual(true);
            expect(signUpServiceSpy.signUp).toHaveBeenCalledWith({
                firstName: 'Test',
                lastName: 'McTester',
                email: 'test@test.com'
            });
        });
    });
});
