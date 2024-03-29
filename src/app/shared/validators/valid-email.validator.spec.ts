import { FormControl, ValidatorFn } from '@angular/forms';

import { validEmail } from './valid-email.validator';

describe('validEmail Validator', () => {
    let validator: ValidatorFn;
    let control: FormControl;

    beforeEach(() => {
        validator = validEmail();
        control = new FormControl('');
    });

    it('should be valid if nothing filled in', () => {
        expect(validator(control)).toEqual(null);
    });

    it('should be invalid if invalid email', () => {
        control.setValue('test@test');
        expect(validator(control)).toEqual({ validEmail: true });
    });

    it('should be valid if valid email', () => {
        control.setValue('test@test.com');
        expect(validator(control)).toEqual(null);
    });
});
