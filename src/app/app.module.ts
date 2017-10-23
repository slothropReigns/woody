import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule, AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
