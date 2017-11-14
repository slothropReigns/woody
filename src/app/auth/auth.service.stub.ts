import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { UserInfo } from './user-info';

export class AuthServiceStub {

    constructor(private loggedin: boolean) {
    }

    login(email: string, password: string) {
    }

    currentUser(): Observable<UserInfo> {
        const userInfo = new UserInfo();
        userInfo.displayName = 'my-display-name';
        userInfo.email = 'my-email';
        userInfo.uid = 'my-uid';
        userInfo.isAnonymous = false;
        userInfo.photoURL = 'my-photo-url';
        userInfo.providerId = 'my-provider-id';

        const replaySubject = new ReplaySubject();
        if (this.loggedin) {
            replaySubject.next(userInfo);
        }
        return replaySubject;
    }

    isLoggedIn(): Observable<boolean> {
        const isLoggedInBS = new AsyncSubject<boolean>();
        isLoggedInBS.next(true);
        isLoggedInBS.complete();
        return isLoggedInBS;
    }
}
