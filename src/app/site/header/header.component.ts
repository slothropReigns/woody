import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
    styles: [ '' ]
})
export class HeaderComponent implements OnInit {
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn().subscribe(this.isLoggedIn);
  }

  ngOnInit() {
  }

  currentUser() {
    return this.authService.currentUser();
  }

}
