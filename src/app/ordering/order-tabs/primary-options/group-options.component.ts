import {Component, DoCheck, OnInit} from '@angular/core';
import {OptionsService} from '../../options.service';
import {SelOption} from '../../optionsInterfaces/options';
import {Wood} from '../../../shared/wood.model';
import {WoodsService} from '../../../shared/woods.service';
import {SelChoice} from '../../optionsInterfaces/selectionItem';
import {OptsChosenService} from '../../opts-chosen.service';

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
  optionsList: SelOption[] = [];
  primaryOptionsChosen: SelChoice[] = [];


    constructor(private optionsService: OptionsService,
                private optsChosenService: OptsChosenService,
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
      this.optsChosenService.confirmPrimaryOptions(this.primaryOptionsChosen, this.woodSelected);
    }
}

