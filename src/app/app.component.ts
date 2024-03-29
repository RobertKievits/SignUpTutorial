import { Component } from '@angular/core';

import { SignUpFormComponent } from './features/sign-up-form/sign-up-form.component';

@Component({
    selector: 'fed-root',
    standalone: true,
    imports: [SignUpFormComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {}
