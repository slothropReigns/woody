import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../order-tabs/group-options/options.service';
import { SelectionItem } from '../order-tabs/group-options/optionsInterfaces/selectionItem';
import { Subscription } from 'rxjs/Subscription';
import { Wood } from '../../shared/wood.model';


// this component to have compact review of previously chosen options
// just a reminder for customer to see what they've chosen
@Component({
    selector: 'app-review-widget',
    templateUrl: './review-widget.component.html',
    styles: []
})
export class ReviewWidgetComponent implements OnInit {
    orderOptions: SelectionItem[] = [];
    woodChoice: Wood;
    optionsSub: Subscription;
    woodSub: Subscription;
    optionNames: string[];

    constructor(private optionsService: OptionsService) {
        this.optionNames = [
            'Panel Profile',
            'Outside Edge',
            'Inside Profile',
            'Door Style',
            'Arch Layout',
            'Multi-Panel',
            'Frame Type',
            'Frame Width',
            'Grain Direction',
            'Raised or Flat',
            'Boring Offset',
            'Boring Tab'
        ];
    }

    ngOnInit() {
        this.orderOptions = this.optionsService.getChosenOptions();
        this.optionsSub = this.optionsService.orderOptions.subscribe(
            (options: SelectionItem[]) => {
                this.orderOptions = options;
            }
        );
        this.woodSub = this.optionsService.orderWoodType.subscribe(
            (wood: Wood) => {
                this.woodChoice = wood;
            }
        );
        console.log('REVIEW WORKING');
        console.log(this.orderOptions);
    }
}
