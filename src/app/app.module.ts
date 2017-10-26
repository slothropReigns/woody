import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ClarityModule } from 'clarity-angular';

import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import { firebaseConfig } from '../environments/firebaseConfig';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { OrderAccordionComponent } from './order-accordion/order-accordion.component';
import { AllInOnePageComponent } from './pages/all-in-one-page.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { LoginPageComponent } from './pages/login-page.component';
import { RegisterPageComponent } from './pages/register-page.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthService } from './shared/auth.service';
import { LoggedInGuard } from './shared/logged-in-guard';
import { WoodEditComponent } from './wood-edit/wood-edit.component';

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
    DashboardPageComponent
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
    AngularFireAuthModule
  ],
  providers: [AuthService, LoggedInGuard],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
