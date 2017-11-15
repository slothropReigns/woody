import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsService } from './group-options/options.service';
import { DoorDetailsComponent } from './door-details/door-details.component';
import { OrderAccordionComponent } from './order-accordion/order-accordion.component';
import { AgGridModule } from 'ag-grid-angular';
import { CellRenderComponent } from './door-details/cell-render/cell-render.component';
import { GroupOptionsComponent } from './group-options/group-options.component';

@NgModule({
    imports: [
        CommonModule,
        AgGridModule.withComponents(
            [ CellRenderComponent ]
        )
    ],
    declarations: [
        DoorDetailsComponent,
        OrderAccordionComponent,
        GroupOptionsComponent
    ],
    providers: [ OptionsService ]
})
export class OrderModule {
}
