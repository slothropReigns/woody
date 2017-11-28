import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../order-tabs/group-options/options.service';
import { SelectionItem } from '../order-tabs/group-options/optionsInterfaces/selectionItem';
import { Subscription } from 'rxjs/Subscription';
import { Wood } from '../../shared/wood.model';
import { Selection } from '../order-tabs/group-options/optionsInterfaces/options';


// this component to have compact review of previously chosen options
// just a reminder for customer to see what they've chosen
@Component({
    selector: 'app-review-widget',
    templateUrl: './review-widget.component.html',
    styles: []
})
export class ReviewWidgetComponent implements OnInit {
    primaryOptions: SelectionItem[] = [];
    woodChoice: Wood;
    optionsSub: Subscription;
    woodSub: Subscription;
    optionsNames: Selection[];

    constructor(private optionsService: OptionsService) {

    }

    ngOnInit() {
        this.getPrimaryOptions();
    }

    getPrimaryOptions() {
        this.primaryOptions = this.optionsService.getChosenPrimaryOptions();
        this.optionsSub = this.optionsService.primaryOrderOptions.subscribe(
            (options: SelectionItem[]) => {
                this.primaryOptions = options;
            }
        );
        this.woodSub = this.optionsService.orderWoodType.subscribe(
            (wood: Wood) => {
                this.woodChoice = wood;
            }
        );
        this.optionsNames = this.optionsService.primaryOptionsList;
        console.log('REVIEW WORKING');
        console.log(this.primaryOptions);
    }
}
