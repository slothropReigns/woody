import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsService } from './group-options/options.service';
import { DoorDetailsComponent } from './door-grid/door-details.component';
import { OrderAccordionComponent } from './order-tabs/order-accordion.component';
import { AgGridModule } from 'ag-grid-angular';
import { CellRenderComponent } from './door-grid/cell-render/cell-render.component';
import { GroupOptionsComponent } from './group-options/group-options.component';
import { PipesModule } from '../shared/pipes/pipes.module';
import { ClarityModule } from 'clarity-angular';
import { SlabGridComponent } from './slab-grid/slab-grid.component';
import { DrwFrontGridComponent } from './drw-front-grid/drw-front-grid.component';

@NgModule({
    imports: [
        CommonModule,
        PipesModule.forRoot(),
        ClarityModule.forRoot(),
        AgGridModule.withComponents(
            [ CellRenderComponent ]
        )
    ],
    declarations: [
        DoorDetailsComponent,
        OrderAccordionComponent,
        GroupOptionsComponent,
        CellRenderComponent,
        SlabGridComponent,
        DrwFrontGridComponent
    ],
    providers: [ OptionsService ]
})
export class OrderModule {
}
