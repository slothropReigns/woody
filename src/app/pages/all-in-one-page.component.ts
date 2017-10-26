import { Component } from '@angular/core';
import { AuthService } from 'app/shared/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-all-in-one-page',
    templateUrl: './all-in-one-page.component.html',
    styleUrls: ['./all-in-one-page.component.css']
})
export class AllInOnePageComponent {
    isLoggedIn = new BehaviorSubject<boolean>(false);

    constructor(private authService: AuthService) {
        this.authService.isLoggedIn().subscribe(this.isLoggedIn);
    }
}
