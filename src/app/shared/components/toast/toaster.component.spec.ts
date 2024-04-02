import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastEvents } from './interfaces';
import { ToasterComponent } from './toaster.component';

describe('ToasterComponent', () => {
    let component: ToasterComponent;
    let fixture: ComponentFixture<ToasterComponent>;

    const mockToast = {
        message: 'Test message',
        title: 'Test message',
        type: ToastEvents.SUCCESS
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ToasterComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ToasterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should dispose of toasts', async () => {
        component.currentToasts = [{ ...mockToast }];

        fixture.detectChanges();
        await fixture.whenStable();

        expect(component.currentToasts.length).toEqual(1);

        component.dispose(0);

        expect(component.currentToasts.length).toEqual(0);
    });
});
