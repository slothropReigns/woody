/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'app/shared/auth.service';
import { AuthServiceStub } from 'app/shared/auth.service.stub';
import { UserInfo } from 'app/shared/user-info';
import { LoginUserComponent } from './login-user.component';

describe('LoginUserComponent', () => {
    let component: LoginUserComponent;
    let fixture: ComponentFixture<LoginUserComponent>;

    beforeEach(async(() => {
        let authServiceStub = new AuthServiceStub(true);

        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [LoginUserComponent],
            providers: [
                {provide: AuthService, useValue: authServiceStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
