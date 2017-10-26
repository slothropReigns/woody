import { Component } from '@angular/core';
import { AuthService } from 'app/shared/auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

    constructor(private authService: AuthService) {
    }

    isLoggedIn(): Observable<boolean> {
        return this.authService.isLoggedIn();
    }
}
