import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cell-render',
    templateUrl: './cell-render.component.html',
    styleUrls: [ './cell-render.component.css' ]
})
export class CellRenderComponent implements OnInit {
    private params: any;
    constructor() {
    }

    ngOnInit() {
    }

    agInit(params: any): void {
        this.params = params;
    }
}

