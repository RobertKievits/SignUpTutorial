import { FormControl, ValidatorFn } from '@angular/forms';

import { mustContainLowercaseAndUppercase } from './must-contain-lowercase-and-uppercase.validator';

describe('MustContainLowercaseAndUppercase Validator', () => {
    let validator: ValidatorFn;
    let control: FormControl;

    beforeEach(() => {
        validator = mustContainLowercaseAndUppercase();
        control = new FormControl('');
    });

    it('should be valid if nothing filled in', () => {
        expect(validator(control)).toEqual(null);
    });

    it('should be invalid if only numbers filled in', () => {
        control.setValue('1234');
        expect(validator(control)).toEqual({
            mustContainLowercaseAndUppercase: true
        });
    });

    it('should be invalid if special characters filled in', () => {
        control.setValue('$%^');
        expect(validator(control)).toEqual({
            mustContainLowercaseAndUppercase: true
        });
    });

    it('should be invalid if only lowercase letters filled in', () => {
        control.setValue('abc');
        expect(validator(control)).toEqual({
            mustContainLowercaseAndUppercase: true
        });
    });

    it('should be invalid if only uppercase letters filled in', () => {
        control.setValue('ABC');
        expect(validator(control)).toEqual({
            mustContainLowercaseAndUppercase: true
        });
    });

    it('should be valid if both lowercase and uppercase letters filled in', () => {
        control.setValue('Aa');
        expect(validator(control)).toEqual(null);
    });
});
