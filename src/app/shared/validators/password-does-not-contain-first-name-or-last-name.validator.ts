import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validator function that checks formgroup if password does not include either first name or last name
 */
export function passwordDoesNotContainFirstNameOrLastName(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
        const firstName = form.get('firstName')?.value;
        const lastName = form.get('lastName')?.value;
        const password = form.get('password')?.value;

        if (firstName && firstName.length > 0) {
            console.log(password.includes(firstName));
            return password.includes(firstName) ? { passwordDoesNotContainFirstNameOrLastName: true } : null;
        }

        if (lastName && lastName.length > 0) {
            return password.includes(lastName) ? { passwordDoesNotContainFirstNameOrLastName: true } : null;
        }

        return null;
    };
}
