import {Component, DoCheck, OnInit} from '@angular/core';
import {OptionsService} from '../options.service';

@Component({
    selector: 'app-order-accordion',
    templateUrl: './order-accordion.component.html',
    styles: [ '' ]
})

export class OrderAccordionComponent implements OnInit, DoCheck {
    activeTab: string = 'group'; // GROUP -- DOORS -- FRONTS -- SLABS (these are the possibilities)

    constructor(private optionsService: OptionsService) {
    }

    ngOnInit() {
// Broadcast which tab is active to the optionsService so it knows which options to serve
        this.optionsService.tabStatus.next(this.activeTab);
    }

    ngDoCheck() {
    }
}
