import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validator that checks if passed value contains both uppercase and lowercase characters
 */
export function mustContainLowercaseAndUppercase(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        if (!value) {
            return null;
        }

        const hasUpperCase = /[A-Z]+/.test(value);
        const hasLowerCase = /[a-z]+/.test(value);

        const containsLowercaseAndUppercase = hasUpperCase && hasLowerCase;

        return !containsLowercaseAndUppercase ? { mustContainLowercaseAndUppercase: true } : null;
    };
}
