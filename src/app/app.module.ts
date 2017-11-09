import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ClarityModule } from 'clarity-angular';

import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import { firebaseConfig } from '../environments/firebaseConfig';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { DisplayUserComponent } from './auth/display-user/display-user.component';
import { LoggedInGuard } from './auth/logged-in-guard';
import { LoginUserComponent } from './auth/login-user/login-user.component';
import { AllInOnePageComponent } from './auth/pages/all-in-one-page.component';
import { DashboardPageComponent } from './auth/pages/dashboard-page.component';
import { HomePageComponent } from './auth/pages/home-page.component';
import { LoginPageComponent } from './auth/pages/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page.component';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { GroupOptionsComponent } from './group-options/group-options.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OrderAccordionComponent } from './order-accordion/order-accordion.component';
import { WoodEditComponent } from './wood-edit/wood-edit.component';
import { ToFracPipe } from './shared/to-frac.pipe';
import { ToDeciPipe } from './shared/to-deci.pipe';
import { DoorDetailsComponent } from './door-details/door-details.component';
import { CellRenderComponent } from './door-details/cell-render/cell-render.component';
import { AgGridModule } from 'ag-grid-angular/main';

// import 'clarity-icons/shapes/all-shapes'; if using from all libraries


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        OrderAccordionComponent,
        HomeComponent,
        WoodEditComponent,
        DisplayUserComponent,
        LoginUserComponent,
        RegisterUserComponent,
        ResetPasswordComponent,
        HomePageComponent,
        RegisterPageComponent,
        AllInOnePageComponent,
        LoginPageComponent,
        DashboardPageComponent,
        GroupOptionsComponent,
        ToFracPipe,
        ToDeciPipe,
        DoorDetailsComponent,
        CellRenderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ClarityModule.forRoot(),
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig, 'woodFire'),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        AgGridModule.withComponents(
            [CellRenderComponent]
        )
    ],
    providers: [ AuthService, LoggedInGuard ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
