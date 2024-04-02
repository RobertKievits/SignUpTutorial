import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToastEvents } from './interfaces';
import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
    let component: ToastComponent;
    let fixture: ComponentFixture<ToastComponent>;

    const mockToast = {
        message: 'Test message',
        title: 'Test message',
        type: ToastEvents.SUCCESS
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ToastComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ToastComponent);
        component = fixture.componentInstance;
        component.toast = mockToast;
        fixture.detectChanges();
    });

    it('should create', () => {
        const title = fixture.debugElement.query(By.css('[data-title]'));
        const message = fixture.debugElement.query(By.css('[data-message]'));
        const closeButton = fixture.debugElement.query(By.css('[data-close-button]'));
        expect(component).toBeTruthy();
        expect(title.nativeElement.textContent.trim()).toEqual(mockToast.title);
        expect(message.nativeElement.textContent.trim()).toEqual(mockToast.message);
        expect(closeButton).toBeTruthy();
    });

    it('should emit dispose event', () => {
        spyOn(component.dispose, 'emit').and.callThrough();
        const closeButton = fixture.debugElement.query(By.css('[data-close-button]'));
        closeButton.nativeElement.click();
        expect(component.dispose.emit).toHaveBeenCalledOnceWith();
    });
});
