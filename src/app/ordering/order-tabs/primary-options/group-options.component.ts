import { Component, DoCheck, OnInit } from '@angular/core';
import { OptionsService } from './options.service';
import { Selection } from './optionsInterfaces/options';
import { Wood } from '../../../shared/wood.model';
import { WoodsService } from '../../../shared/woods.service';
import { SelectionItem } from './optionsInterfaces/selectionItem';

@Component({
    selector: 'app-group-options',
    templateUrl: './group-options.component.html',
    styles: [ '' ]
})
export class GroupOptionsComponent implements OnInit, DoCheck {

// Woods list and data
    woods: Wood[] = [];
    woodSelected: Wood;

// Assembled options list array
    optionsList: Selection[] = [];
    primaryOptionsChosen: SelectionItem[] = [];


    constructor(private optionsService: OptionsService,
                private woodsService: WoodsService) {

        this.optionsList = this.optionsService.primaryOptionsList;
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
                console.log('get woods called from group opt');
            }
        );
    }

    confirmPrimaryChoices() {
        this.optionsService.confirmPrimaryOptions(this.primaryOptionsChosen, this.woodSelected);
    }
}
