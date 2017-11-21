import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cell-render',
    styles: [ '' ],
    template: `
        <span [ngStyle]="(params.value === 'Custom')?{'color':'red', 'font-weight':'bold'}:null"
        >{{ params.value }}</span>
    `
})
export class CellRenderComponent implements OnInit {
    params: any;
    constructor() {
    }

    ngOnInit() {
    }

    agInit(params: any): void {
        this.params = params;
    }
}

