import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './site/auth/auth.service';
import { UserInfo } from './site/auth/user-info';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [ '' ]
})
export class AppComponent {
    isLoggedIn = new BehaviorSubject<boolean>(false);
    private alertType = null;
    private alertMessage = '';

    // TODO move all this junk out

    constructor(private authService: AuthService, private router: Router) {
        this.authService.isLoggedIn().subscribe(this.isLoggedIn);
    }

    currentUser(): Observable<UserInfo> {
        return this.authService.currentUser();
    }

    logout() {
        this.authService.logout();
        this.router.navigate([ '/' ]);
    }

    onResetPasswordSuccess() {
        this.alertType = 'success';
        this.alertMessage = 'Reset Password Sent!';
    }

    onLoginSuccess() {
        this.alertType = 'success';
        this.alertMessage = 'Login Success!';
    }

    onRegisterSuccess() {
        this.alertType = 'success';
        this.alertMessage = 'User registered!';
    }

    onError(err) {
        this.alertType = 'danger';
        this.alertMessage = err;
    }

    onLoggedOut() {
        // Just reset any displayed messsage.
        this.alertType = null;
        this.alertMessage = '';
    }

    alertClosed() {
        this.alertType = null;
        this.alertMessage = '';
    }
}
