import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';

import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OrderAccordionComponent } from './order-accordion/order-accordion.component';
import { WoodEditComponent } from './wood-edit/wood-edit.component';

// import 'clarity-icons/shapes/all-shapes'; if using from all libraries


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderAccordionComponent,
    HomeComponent,
    WoodEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClarityModule.forRoot(),
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
