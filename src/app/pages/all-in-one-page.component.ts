import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-all-in-one-page',
  templateUrl: './all-in-one-page.component.html',
  styleUrls: [ './all-in-one-page.component.css' ]
})
export class AllInOnePageComponent {
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn().subscribe(this.isLoggedIn);
  }
}
