import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './site/auth/logged-in-guard';
import { AllInOnePageComponent } from './site/auth/pages/all-in-one-page.component';
import { HomePageComponent } from './site/auth/pages/home-page.component';
import { LoginPageComponent } from './site/auth/pages/login-page.component';
import { RegisterPageComponent } from './site/auth/pages/register-page.component';
import { ResetPasswordComponent } from './site/auth/reset-password/reset-password.component';
import { HomeComponent } from './site/home/home.component';
import { OrderAccordionComponent } from './ordering/order-accordion/order-accordion.component';
import { WoodEditComponent } from './adminFunctions/wood-edit/wood-edit.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'order', component: OrderAccordionComponent },
    { path: 'edit/wood', component: WoodEditComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'all-in-one', component: AllInOnePageComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'dashboard', component: OrderAccordionComponent, canActivate: [ LoggedInGuard ] },
    { path: 'badhome', component: HomePageComponent }

];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
        ReactiveFormsModule, FormsModule ],
    exports: [ RouterModule ],
    providers: []
})

export class AppRoutingModule {
}
