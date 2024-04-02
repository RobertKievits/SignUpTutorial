import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ToastService } from './services/toast.service';
import { Toast } from './interfaces';
import { ToastComponent } from './toast.component';

@Component({
    selector: 'app-toaster',
    standalone: true,
    imports: [ToastComponent],
    templateUrl: './toaster.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToasterComponent implements OnInit {
    public currentToasts: Toast[] = [];

    constructor(
        private toastService: ToastService,
        private cdr: ChangeDetectorRef
    ) {}

    /**
     * Angular lifecycle hook.
     * Subscribe to incoming toasts
     */
    public ngOnInit(): void {
        this.subscribeToToasts();
    }

    /**
     * Watch for new toasts and add them to current toasts
     */
    private subscribeToToasts(): void {
        this.toastService.toastEvents.subscribe((toasts: Toast) => {
            const currentToast: Toast = {
                type: toasts.type,
                title: toasts.title,
                message: toasts.message
            };
            this.currentToasts.push(currentToast);
            this.cdr.detectChanges();
        });
    }

    /**
     * Dispose of toast based on index
     * @param {number} index
     */
    public dispose(index: number): void {
        this.currentToasts.splice(index, 1);
        this.cdr.detectChanges();
    }
}
