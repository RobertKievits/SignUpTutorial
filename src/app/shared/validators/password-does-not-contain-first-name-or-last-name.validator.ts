import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validator function that checks formgroup if password does not include either first name or last name
 */
export function passwordDoesNotContainFirstNameOrLastName(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const form = control.parent as FormGroup;

        if (!form) {
            return null;
        }

        const firstName = form.get('firstName')?.value;
        const lastName = form.get('lastName')?.value;
        const password = form.get('password')?.value;

        if (firstName && firstName.length > 0) {
            return password.includes(firstName) ? { passwordDoesNotContainFirstNameOrLastName: true } : null;
        }

        if (lastName && lastName.length > 0) {
            return password.includes(lastName) ? { passwordDoesNotContainFirstNameOrLastName: true } : null;
        }

        return null;
    };
}
