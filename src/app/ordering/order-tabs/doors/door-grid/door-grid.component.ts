import { Component } from '@angular/core';

import { GridOptions } from 'ag-grid/main';
import { CellRenderComponent } from '../../cell-renderers/test-cell-render.component';

@Component({
    selector: 'app-door-grid',
    templateUrl: './door-grid.component.html',
    styles: [ '' ]
})
export class DoorDetailsComponent {
    testOptionsArray: string[];
    testOptionsArray2: string[];
    gridOptions: GridOptions;
    columnDefs: any[];
    rowData: any[];
    setTheme: string = 'ag-theme-material';
    testNumber: string[] = [ '5', '1.0625', '4.9375', '16.22222222', '5.375' ];
    testFrac: string[] = [ '5-1/2', '6', '7-3/8', '7-3/16', '100' ];

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowHeight = 30;
        this.gridOptions.headerHeight = 30;

        this.testOptionsArray = [ 'Standard (1x1)', 'Frame Only', '1x2', '1x3', '1x4', '2x1', '3x1', '4x1' ];
        this.testOptionsArray2 = [ 'Square', 'Eyebrow', 'Cathedral', 'Double Eyebrow' ];

        this.columnDefs = [
            { headerName: 'QTY', field: 'qty', editable: true, width: 90, cellRendererFramework: CellRenderComponent },
            { headerName: 'Width', field: 'width', editable: true, width: 90 },
            { headerName: 'Height', field: 'height', editable: true, width: 90 },
            {
                headerName: 'Door Type', field: 'doorType', editable: true, cellEditor: 'select',
                cellEditorParams: { values: this.testOptionsArray }
            },
            {
                headerName: 'Door Style', field: 'doorStyle', editable: true, cellEditor: 'select',
                cellEditorParams: { values: this.testOptionsArray2 }
            },
            {
                headerName: 'Bore', field: 'bore', editable: true, cellEditor: 'select',
                cellEditorParams: { values: [ 'yes', 'no' ] }
            },
            {
                headerName: 'Frame Width', children: [
                {
                    headerName: 'Status', field: 'status', columnGroupShow: 'closed',
                    valueGetter: `(data.qty >= 1) ? ((data.leftStile && data.rightStile && data.topRail && data.bottomRail) === '2-3/8') ?
                 'std. 2-3/8"' : 'Custom' : '' `, cellRendererFramework: CellRenderComponent
                },
                {
                    headerName: 'Left Stile', field: 'leftStile', columnGroupShow: 'open', editable: true,
                    cellEditor: 'text', cellStyle: this.cellStyleOut
                },
                {
                    headerName: 'Right Stile', field: 'rightStile', columnGroupShow: 'open', editable: true,
                    cellEditor: 'text', cellStyle: this.cellStyleOut
                },
                {
                    headerName: 'Top Rail', field: 'topRail', columnGroupShow: 'open', editable: true,
                    cellEditor: 'text', cellStyle: this.cellStyleOut
                },
                {
                    headerName: 'Bottom Rail', field: 'bottomRail', columnGroupShow: 'open', editable: true,
                    cellEditor: 'text', cellStyle: this.cellStyleOut
                } ]
            },
            { headerName: 'Label / Note', field: 'label', editable: true, cellEditor: 'text' }

        ];

        this.rowData = [
            {
                qty: 1, width: 10, height: 40, doorType: 'Standard (1x1)', doorStyle: 'Square', bore: 'Yes',
                leftStile: '2-3/8', rightStile: '2-3/8', topRail: '2-3/8', bottomRail: '2-3/8', label: 'this is a test note'
            },
            {
                qty: 3, width: 17, height: 31, doorType: 'Frame Only', doorStyle: 'Eyebrow', bore: 'No',
                leftStile: '2-3/8', rightStile: '2-3/8', topRail: '2-3/8', bottomRail: '5', label: 'this is a test note2'
            },
            {
                qty: 2, width: 33, height: 45, doorType: '1x2', doorStyle: 'Square', bore: 'Yes',
                leftStile: '4-1/2', rightStile: '4-1/2', topRail: '4-1/2', bottomRail: '4-1/2', label: 'this is a test note3'
            }
        ];

        for (let i = 0; i < 50; i++) {
            this.rowData.push(
                { headerName: '', field: '', price: '' });
        }
    }


    cellStyleOut(params) {
        if (params.value === '2-3/8') {
            return { 'color': '', 'font-weight': 'normal', 'border': '1px solid transparent' };
        } else if (params.value) {
            return { 'color': 'red', 'font-weight': 'bold', 'border': '1px solid red' };
        }
    }

    onGridReady(params) {
        console.log('grid ready called');
        params.api.sizeColumnsToFit();
    }


    selectAllRows() {
        this.gridOptions.api.selectAll();
    }

    autoSize() {
        const allColIds = [];
        this.gridOptions.columnApi.getAllColumns().forEach((column) => {
            allColIds.push(column.getColId());
        });
        this.gridOptions.columnApi.autoSizeColumns(allColIds);
        console.log('autosize called');
    }

    resetHeight() {
        this.gridOptions.api.resetRowHeights();
    }

    toFit() {
        this.gridOptions.api.sizeColumnsToFit();
    }
}


