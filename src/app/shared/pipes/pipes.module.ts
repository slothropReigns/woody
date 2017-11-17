import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDeciPipe } from './to-deci.pipe';
import { ToFracPipe } from './to-frac.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ToFracPipe,
        ToDeciPipe
    ],
    exports: [
        ToDeciPipe,
        ToFracPipe
    ]
})
export class PipesModule {
    static forRoot() {
        return {
            ngModule: PipesModule,
            providers: [],
        }
    }
}
