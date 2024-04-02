import { TestBed } from '@angular/core/testing';

import { ToastEvents } from '../interfaces';

import { ToastService } from './toast.service';

describe('ToastService', () => {
    let service: ToastService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ToastService);
    });

    it('should emit new toasts', () => {
        const mockToast = {
            message: 'Test message',
            title: 'Test message',
            type: ToastEvents.SUCCESS
        };
        service.toastEvents.subscribe((toast) => {
            expect(toast).toEqual(mockToast);
        });

        service.showToast(mockToast);
    });
});
