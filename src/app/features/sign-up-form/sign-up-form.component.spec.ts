import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SignUpService } from './services/sign-up.service';
import { SignUpFormComponent } from './sign-up-form.component';

describe('SignUpFormComponent', () => {
    let component: SignUpFormComponent;
    let fixture: ComponentFixture<SignUpFormComponent>;
    const signUpServiceSpy = jasmine.createSpyObj('SignUpService', ['signUp']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SignUpFormComponent]
        })
            .overrideComponent(SignUpFormComponent, {
                add: {
                    providers: [
                        {
                            provide: SignUpService,
                            useValue: signUpServiceSpy
                        }
                    ]
                },
                remove: { providers: [SignUpService] }
            })
            .compileComponents();

        fixture = TestBed.createComponent(SignUpFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
