import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Toast } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    public toastEvents: Observable<Toast>;
    private _toastEvents = new Subject<Toast>();

    constructor() {
        this.toastEvents = this._toastEvents.asObservable();
    }

    /**
     * Show toast message
     * @param toast
     */
    public showToast(toast: Toast): void {
        this._toastEvents.next(toast);
    }
}
