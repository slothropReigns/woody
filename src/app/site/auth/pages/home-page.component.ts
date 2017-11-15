import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
    styles: [ '' ]
})
export class HomePageComponent {
  userInfo: Observable<UserInfo>;
  isLoggedIn = new BehaviorSubject(false);

  constructor(private authService: AuthService, private router: Router) {
    this.userInfo = authService.userInfo;
    this.userInfo
      .map(userInfo => !userInfo.isAnonymous)
      .subscribe(this.isLoggedIn);
  }

  navigateToLogin(e) {
    this.router.navigate([ '/login' ]);
    e.preventDefault();
  }

  navigateToRegister(e) {
    this.router.navigate([ '/register' ]);
    e.preventDefault();
  }
}
