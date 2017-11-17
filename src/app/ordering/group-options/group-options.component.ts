import { Component, OnInit } from '@angular/core';
import { OptionsService } from './options.service';
import { Selection } from './optionsInterfaces/options';
import { Wood } from '../../shared/wood.model';
import { WoodsService } from '../../shared/woods.service';

@Component({
    selector: 'app-group-options',
    templateUrl: './group-options.component.html',
    styles: [ '' ]
})
export class GroupOptionsComponent implements OnInit {
    woods: Wood[];
    panelProfile: Selection;
    outsideEdge: Selection;
    insideProfile: Selection;
    doorStyle: Selection;
    archLayout: Selection;
    multiPanel: Selection;



    constructor(private options: OptionsService,
                private woodsService: WoodsService) {
        this.panelProfile = this.options.panelProfile;
        this.outsideEdge = this.options.outsideEdge;
        this.insideProfile = this.options.insideProfile;
        this.doorStyle = this.options.doorStyle;
        this.archLayout = this.options.doorStyle;
        this.multiPanel = this.options.multiPanel;
    }


    ngOnInit() {
        this.getWoods();
    }

    getWoods() {
        console.log('hmm');
        this.woodsService.getWoods().subscribe(
            woods => {
                this.woods = woods;
                console.log(woods);
                console.log('getwoods called from group opt');
                // if (!this.selectedWood) {
                //     this.selectedWood = woods[ 0 ];
                // }
            }
        );
    }

}

