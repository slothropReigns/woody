import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsService } from './order-tabs/group-options/options.service';
import { DoorDetailsComponent } from './order-tabs/door-grid/door-details.component';
import { OrderAccordionComponent } from './order-tabs/order-accordion.component';
import { AgGridModule } from 'ag-grid-angular';
import { CellRenderComponent } from './order-tabs/cell-renderers/test-cell-render.component';
import { GroupOptionsComponent } from './order-tabs/group-options/group-options.component';
import { PipesModule } from '../shared/pipes/pipes.module';
import { ClarityModule } from 'clarity-angular';
import { SlabGridComponent } from './order-tabs/slab-grid/slab-grid.component';
import { DrwFrontGridComponent } from './order-tabs/drw-front-grid/drw-front-grid.component';
import { FrameWidthComponent } from './order-tabs/cell-renderers/frame-width.component';
import { ReviewWidgetComponent } from './review-widget/review-widget.component';

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
        DrwFrontGridComponent,
        FrameWidthComponent,
        ReviewWidgetComponent
    ],
    providers: [ OptionsService ]
})
export class OrderModule {
}
