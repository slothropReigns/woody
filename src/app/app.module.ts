import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from '../environments/firebaseConfig';
// +_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_
// import 'clarity-icons/shapes/all-shapes'; if using from all libraries
import { ClarityModule } from 'clarity-angular';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
// +_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './site/auth/auth.service';
import { LoggedInGuard } from './site/auth/logged-in-guard';
import { WoodEditComponent } from './adminFunctions/wood-edit/wood-edit.component';
import { ToFracPipe } from './shared/to-frac.pipe';
import { ToDeciPipe } from './shared/to-deci.pipe';
import { WoodsService } from './shared/woods.service';
import { OrderModule } from './ordering/order.module';
import { SiteModule } from './site/site.module';


@NgModule({
    declarations: [
        AppComponent,
        WoodEditComponent,
        ToFracPipe,
        ToDeciPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OrderModule,
        SiteModule,
        ReactiveFormsModule,
        FormsModule,
        ClarityModule.forRoot(),
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig, 'woodFire'),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFirestoreModule

    ],
    providers: [ AuthService, LoggedInGuard, WoodsService ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
