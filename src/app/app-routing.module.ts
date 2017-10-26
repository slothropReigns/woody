import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderAccordionComponent } from './order-accordion/order-accordion.component';
import { AllInOnePageComponent } from './pages/all-in-one-page.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { LoginPageComponent } from './pages/login-page.component';
import { RegisterPageComponent } from './pages/register-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoggedInGuard } from './shared/logged-in-guard';
import { WoodEditComponent } from './wood-edit/wood-edit.component';
import { WoodsService } from './woods.service';

const appRoutes: Routes = [
  { path: 'oldhome', component: HomeComponent },
  { path: 'order', component: OrderAccordionComponent },
  { path: 'edit/wood', component: WoodEditComponent },
  {path: 'register', component: RegisterPageComponent},
  {path: 'all-in-one', component: AllInOnePageComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardPageComponent, canActivate: [LoggedInGuard]},
  {path: '', component: HomePageComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    ReactiveFormsModule, FormsModule ],
  exports: [ RouterModule ],
  providers: [ WoodsService ]
})

export class AppRoutingModule {
}
