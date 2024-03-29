import { FormControl } from '@angular/forms';

export interface SignupFormGroup {
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
}
