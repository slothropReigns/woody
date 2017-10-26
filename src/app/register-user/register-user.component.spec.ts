/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'app/shared/auth.service';
import { AuthServiceStub } from 'app/shared/auth.service.stub';
import { RegisterUserComponent } from './register-user.component';

describe('RegisterUserComponent', () => {
    let component: RegisterUserComponent;
    let fixture: ComponentFixture<RegisterUserComponent>;

    beforeEach(async(() => {
        let authServiceStub = new AuthServiceStub(true);

        TestBed.configureTestingModule({
            declarations: [RegisterUserComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
            providers: [
                {provide: AuthService, useValue: authServiceStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
