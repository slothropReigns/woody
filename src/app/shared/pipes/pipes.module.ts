import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToDeciPipe} from './to-deci.pipe';
import {ToFracPipe} from './to-frac.pipe';
import {PairsPipe} from './pairs.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToFracPipe,
    ToDeciPipe,
    PairsPipe
  ],
  exports: [
    ToDeciPipe,
    ToFracPipe,
    PairsPipe
  ]
})
export class PipesModule {
  static forRoot() {
    return {
      ngModule: PipesModule,
      providers: [],
    };
  }
}
