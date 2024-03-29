import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { noop } from 'rxjs';
import { InputType } from './input.model';

@Component({
    selector: 'fed-input',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor {
    /**
     * Field label. Shown in the field. Moves up if focussed, filled in or a prefix is set
     */
    @Input() public label: string;

    /**
     * Type of input (Standard HTML types)
     */
    @Input() public errorMessages: { [id: string]: string };

    /**
     * Type of input (Standard HTML types)
     */
    @Input() public type: InputType = 'text';

    constructor(@Self() @Optional() public control: NgControl) {
        this.control && (this.control.valueAccessor = this);
    }

    public onChange: (value: any) => void = () => {};
    public onTouched: () => void = noop;

    /** @internal */
    public isDisabled = false;

    private _value = '';

    public get value(): string {
        return this._value;
    }

    public set value(val: string) {
        this._value = val;
    }

    /**
     * Handle change of input
     */
    public onInput(event: Event): void {
        this.onChange(this.value);
    }

    /**
     * Get current errors
     * @ignore
     */
    public get errors(): string[] | null {
        const { dirty, errors, invalid, touched } = this.control || {};

        if (!this.errorMessages || !errors || !dirty || !invalid || !touched) {
            return null;
        }

        console.log();

        return Object.keys(errors)
            .map((error) => this.errorMessages[error])
            .filter((message) => message !== undefined);

        // const errorKey = Object.keys(errors).find((error) => this.messages[error]) || 'incorrect';
        // const params = errors[errorKey] ? { ...errors[errorKey] } : {};
        // return this.messages[errorKey] ? this.contentService.getInterpolated(this.messages[errorKey], params) : this.messages.incorrect;
    }

    /**
     * Control value accessor function
     * Registers on change event
     * @internal
     */
    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    /**
     * Control value accessor function
     * Registers on touched event
     * @internal
     */
    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    /**
     * Control value accessor function
     * Sets isDisabled state
     * @internal
     */
    public setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    /**
     * Control value accessor function
     * Write value
     * @internal
     */
    public writeValue(value: any): void {
        this.value = value;
    }
}
