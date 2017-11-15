import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
    styles: [ '' ]
})
export class DisplayUserComponent {
  @Output() onLoggedOut = new EventEmitter();


  constructor(private authService: AuthService) {
  }

  currentUser(): Observable<UserInfo> {
    return this.authService.currentUser();
  }

  logout() {
    this.authService.logout().subscribe(() => this.onLoggedOut.emit('success'));
  }
}
