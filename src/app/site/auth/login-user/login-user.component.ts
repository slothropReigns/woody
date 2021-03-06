import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login-user',
    templateUrl: './login-user.component.html',
    styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
    form: FormGroup;
    email: AbstractControl;
    password: AbstractControl;
    @Output() onSuccess = new EventEmitter();
    @Output() onError = new EventEmitter();

    constructor(private authService: AuthService, private fb: FormBuilder) {
        this.form = fb.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }

    login() {
        if (this.form.valid) {
            this.authService.login(this.email.value, this.password.value)
                .subscribe(
                    () => {
                        this.onSuccess.emit();
                        this.form.reset();
                    },
                    (err) => this.onError.emit(err)
                );
        }
    }

    loginVia($event, provider: string) {
        $event.preventDefault();
        this.authService.loginViaProvider(provider).subscribe(
            () => this.onSuccess.emit(),
            err => this.onError.emit(err)
        );
    }
}
