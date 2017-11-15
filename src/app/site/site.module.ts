import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayUserComponent } from './auth/display-user/display-user.component';
import { LoginPageComponent } from './auth/pages/login-page.component';
import { LoginUserComponent } from './auth/login-user/login-user.component';
import { AllInOnePageComponent } from './auth/pages/all-in-one-page.component';
import { DashboardPageComponent } from './auth/pages/dashboard-page.component';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './auth/pages/home-page.component';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { HeaderComponent } from './header/header.component';
import { RegisterPageComponent } from './auth/pages/register-page.component';

@NgModule({
    imports: [
        CommonModule,


    ],
    declarations: [
        DisplayUserComponent,
        LoginPageComponent,
        LoginUserComponent,
        AllInOnePageComponent,
        DashboardPageComponent,
        HomeComponent,
        HomePageComponent,
        RegisterUserComponent,
        RegisterPageComponent,
        ResetPasswordComponent,
        HeaderComponent
    ]
})
export class SiteModule {
}
