import { Component, DoCheck, OnInit } from '@angular/core';
import { OptionsService } from './options.service';
import { Selection } from './optionsInterfaces/options';
import { Wood } from '../../../shared/wood.model';
import { WoodsService } from '../../../shared/woods.service';

@Component({
    selector: 'app-group-options',
    templateUrl: './group-options.component.html',
    styles: [ '' ]
})
export class GroupOptionsComponent implements OnInit, DoCheck {

// Woods list and data
    woods: Wood[] = [];

// Assembled options list array
    optionsList: Selection[] = [];


    constructor(private options: OptionsService,
                private woodsService: WoodsService) {

        this.options.generateOptionsList();
        this.optionsList = this.options.optionsList;
    }


    ngOnInit() {
        this.getWoodsUpdated();
    }

    ngDoCheck() {
        return;
    }

    getWoodsUpdated() {
        console.log('hmm');
        this.woodsService.getWoods().subscribe(
            woods => {
                this.woods = woods;
                console.log(woods);
                console.log('getwoods called from group opt');
            }
        );
    }

    confirmChoices() {

    }
}

