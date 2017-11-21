import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
    selector: 'app-order-accordion',
    templateUrl: './order-accordion.component.html',
    styles: [ '' ]
})

export class OrderAccordionComponent implements OnInit, DoCheck {
    activeTab: string = 'group'; // GROUP -- DOORS -- FRONTS -- SLABS (these are the possibilities)

    constructor() {
    }

    ngOnInit() {
    }

    ngDoCheck() {
    }
}
