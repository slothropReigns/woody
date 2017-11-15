import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
    styles: [ '' ]
})
export class RegisterPageComponent {

  constructor(private authService: AuthService) {
  }

  isLoggedIn(): Observable<boolean> {
    return this.authService.isLoggedIn();
  }
}
