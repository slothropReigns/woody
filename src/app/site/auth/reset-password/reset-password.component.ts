import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styles: [ '' ]
})
export class ResetPasswordComponent {
    form: FormGroup;
    email: AbstractControl;
    @Output() onSuccess = new EventEmitter();
    @Output() onError = new EventEmitter();

    constructor(private authService: AuthService, private fb: FormBuilder) {
        this.form = fb.group({
            'email': ['', Validators.required]
        });
        this.email = this.form.controls['email'];
    }

    reset() {
        if (this.form.valid) {
            this.authService.sendPasswordResetEmail(this.email.value)
                .subscribe(
                    () => {
                        this.onSuccess.emit();
                        this.form.reset();
                    },
                    err => this.onError.emit(err)
                );

        }
    }
}
