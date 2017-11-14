import { Component, OnInit } from '@angular/core';
import { OptionsService } from './options.service';
import { Selection } from './optionsInterfaces/options';

@Component({
    selector: 'app-group-options',
    templateUrl: './group-options.component.html',
    styleUrls: [ './group-options.component.css' ]
})
export class GroupOptionsComponent implements OnInit {
    panelProfile: Selection;
    outsideEdge: Selection;
    insideProfile: Selection;
    doorStyle: Selection;
    archLayout: Selection;
    multiPanel: Selection;



    constructor(private options: OptionsService) {
        this.panelProfile = this.options.panelProfile;
        this.outsideEdge = this.options.outsideEdge;
        this.insideProfile = this.options.insideProfile;
        this.doorStyle = this.options.doorStyle;
        this.archLayout = this.options.doorStyle;
        this.multiPanel = this.options.multiPanel;
    }


    ngOnInit() {

    }
}

