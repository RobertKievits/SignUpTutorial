import { SignUpFormComponent } from '@features';
import { ToasterComponent } from '@components';

import { Component } from '@angular/core';

@Component({
    selector: 'fed-root',
    standalone: true,
    imports: [SignUpFormComponent, ToasterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {}
