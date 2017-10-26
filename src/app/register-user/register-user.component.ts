import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: [ './register-user.component.css' ]
})
export class RegisterUserComponent {
  form: FormGroup;
  email: AbstractControl;
  name: AbstractControl;
  password: AbstractControl;
  password2: AbstractControl;

  @Output() onSuccess = new EventEmitter();
  @Output() onError = new EventEmitter();

  constructor(private authService: AuthService,
              private fb: FormBuilder) {
    this.form = fb.group({
      'name': [ '', Validators.required ],
      'email': [ '', Validators.compose([
        Validators.required,
        Validators.email ]
      ) ],
      'password': [ '', Validators.required ],
      'password2': [ '', Validators.required ]
    }, { validator: this.matchingPasswords('password', 'password2') });
    this.name = this.form.controls[ 'name' ];
    this.email = this.form.controls[ 'email' ];
    this.password = this.form.controls[ 'password' ];
    this.password2 = this.form.controls[ 'password2' ];
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.createUser(this.email.value, this.password.value, this.name.value)
        .subscribe(
          () => {
            this.onSuccess.emit('success');
            this.form.reset();
          },
          err => this.onError.emit(err)
        );
    }
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const password = group.controls[ passwordKey ];
      const confirmPassword = group.controls[ confirmPasswordKey ];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    };
  }
}
