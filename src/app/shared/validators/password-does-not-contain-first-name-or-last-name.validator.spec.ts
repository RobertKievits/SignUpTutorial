import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

import { passwordDoesNotContainFirstNameOrLastName } from './password-does-not-contain-first-name-or-last-name.validator';

describe('PasswordDoesNotContainFirstNameOrLastName Validator', () => {
    let validator: ValidatorFn;
    let form: FormGroup;
    let firstNameControl: FormControl;
    let lastNameControl: FormControl;
    let passwordControl: FormControl;

    beforeEach(() => {
        validator = passwordDoesNotContainFirstNameOrLastName();
        form = new FormGroup({
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            password: new FormControl('')
        });
        firstNameControl = form.get('firstName') as FormControl;
        lastNameControl = form.get('lastName') as FormControl;
        passwordControl = form.get('password') as FormControl;
    });

    it('should be valid if nothing filled in', () => {
        expect(validator(form)).toEqual(null);
    });

    it('should be valid if only first name filled in', () => {
        firstNameControl.setValue('Test');
        expect(validator(form)).toEqual(null);
    });

    it('should be valid if only last name filled in', () => {
        firstNameControl.setValue('Test');
        expect(validator(form)).toEqual(null);
    });

    it('should be invalid if password contains first name', () => {
        firstNameControl.setValue('Test');
        passwordControl.setValue('Testabc');
        expect(validator(form)).toEqual({
            passwordDoesNotContainFirstNameOrLastName: true
        });
    });

    it('should be invalid if password contains last name', () => {
        lastNameControl.setValue('Test');
        passwordControl.setValue('Testabc');
        expect(validator(form)).toEqual({
            passwordDoesNotContainFirstNameOrLastName: true
        });
    });
});
