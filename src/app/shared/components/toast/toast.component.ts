import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Toast, ToastEvents } from './interfaces';

@Component({
    selector: 'app-toast',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
    @Input() toast: Toast;

    @Output() dispose = new EventEmitter<void>();

    public toastEvents = ToastEvents;
}
