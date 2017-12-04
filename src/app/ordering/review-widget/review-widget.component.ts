import {Component, OnInit} from '@angular/core';
import {OptionsService} from '../options.service';
import {SelChoice} from '../optionsInterfaces/selectionItem';
import {Subscription} from 'rxjs/Subscription';
import {Wood} from '../../shared/wood.model';
import {SelOption} from '../optionsInterfaces/options';
import {OptsChosenService} from '../opts-chosen.service';


// this component to have compact review of previously chosen options
// just a reminder for customer to see what they've chosen
@Component({
    selector: 'app-review-widget',
    templateUrl: './review-widget.component.html',
    styles: []
})
export class ReviewWidgetComponent implements OnInit {
  primaryOptions: SelChoice[] = [];
    woodChoice: Wood;
    optionsSub: Subscription;
    woodSub: Subscription;
  optionsNames: SelOption[];

  constructor(private optionsService: OptionsService,
              private optsChosenService: OptsChosenService) {

    }

    ngOnInit() {
        this.getPrimaryOptions();
    }

    getPrimaryOptions() {
      this.primaryOptions = this.optsChosenService.getChosenPrimaryOptions();
      this.optionsSub = this.optsChosenService.primaryOrderOptions.subscribe(
          (options: SelChoice[]) => {
                this.primaryOptions = options;
            }
        );
      this.woodSub = this.optsChosenService.orderWoodType.subscribe(
            (wood: Wood) => {
                this.woodChoice = wood;
            }
        );
        this.optionsNames = this.optionsService.primaryOptionsList;
        console.log('REVIEW WORKING');
        console.log(this.primaryOptions);
    }
}
