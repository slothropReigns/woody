import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderAccordionComponent } from './order-accordion/order-accordion.component';
import { WoodEditComponent } from './wood-edit/wood-edit.component';
import { WoodsService } from './woods.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderAccordionComponent },
  { path: 'edit/wood', component: WoodEditComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ReactiveFormsModule, FormsModule],
  exports: [ RouterModule ],
  providers: [ WoodsService ]
})

export class AppRoutingModule {
}
