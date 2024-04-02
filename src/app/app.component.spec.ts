import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .overrideComponent(AppComponent, {
                set: {
                    imports: [],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }
            })
            .compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
