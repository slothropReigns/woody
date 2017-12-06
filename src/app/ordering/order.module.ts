import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OptionsService} from './options.service';
import {DoorDetailsComponent} from './order-tabs/doors/door-grid/door-grid.component';
import {OrderAccordionComponent} from './order-tabs/order-accordion.component';
import {AgGridModule} from 'ag-grid-angular';
import {CellRenderComponent} from './order-tabs/cell-renderers/test-cell-render.component';
import {GroupOptionsComponent} from './order-tabs/primary-options/group-options.component';
import {PipesModule} from '../shared/pipes/pipes.module';
import {ClarityModule} from 'clarity-angular';
import {SlabGridComponent} from './order-tabs/slabs/slab-grid/slab-grid.component';
import {DrwFrontGridComponent} from './order-tabs/drw-fronts/drw-front-grid/drw-front-grid.component';
import {FrameWidthComponent} from './order-tabs/cell-renderers/frame-width.component';
import {ReviewWidgetComponent} from './review-widget/review-widget.component';
import {FormsModule} from '@angular/forms';
import {DoorOptionsComponent} from './order-tabs/doors/door-options/door-options.component';
import {DrwFrontOptionsComponent} from './order-tabs/drw-fronts/drw-front-options/drw-front-options.component';
import {SlabOptionsComponent} from './order-tabs/slabs/slab-options/slab-options.component';
import {OptsChosenService} from './opts-chosen.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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
        DrwFrontGridComponent,
        FrameWidthComponent,
        ReviewWidgetComponent,
        DoorOptionsComponent,
        DrwFrontOptionsComponent,
        SlabOptionsComponent
    ],
  providers: [OptionsService, OptsChosenService]
})
export class OrderModule {
}
