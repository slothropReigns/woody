import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './auth/logged-in-guard';
import { AllInOnePageComponent } from './auth/pages/all-in-one-page.component';
import { DashboardPageComponent } from './auth/pages/dashboard-page.component';
import { HomePageComponent } from './auth/pages/home-page.component';
import { LoginPageComponent } from './auth/pages/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { OrderAccordionComponent } from './order-accordion/order-accordion.component';
import { WoodEditComponent } from './wood-edit/wood-edit.component';
import { WoodsService } from './woods.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderAccordionComponent },
  { path: 'edit/wood', component: WoodEditComponent },
  {path: 'register', component: RegisterPageComponent},
  {path: 'all-in-one', component: AllInOnePageComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardPageComponent, canActivate: [LoggedInGuard]},
  { path: 'badhome', component: HomePageComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    ReactiveFormsModule, FormsModule ],
  exports: [ RouterModule ],
  providers: [ WoodsService ]
})

export class AppRoutingModule {
}
