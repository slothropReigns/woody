import {Component, OnInit} from '@angular/core';
import {OptionsService} from '../../primary-options/options.service';
import {Selection} from '../../primary-options/optionsInterfaces/options';
import {SelectionItem} from '../../primary-options/optionsInterfaces/selectionItem';

@Component({
  selector: 'app-door-options',
  templateUrl: './door-options.component.html',
  styles: []
})
export class DoorOptionsComponent implements OnInit {
  primaryOptionsChosen: SelectionItem[] = [];
  doorOptionsList: Selection[] = [];
  doorOptionsChosen: SelectionItem[] = [];
  doorType: string;

  constructor(private optionsService: OptionsService) {
    this.optionsService.optionsChosenPing.subscribe(
      ping => {
        this.getDoorType();
        console.log(ping);
      }
    );
  }

  /*depending on which type of door is ordered, fetch correct options list*/
  getDoorType() {
    this.primaryOptionsChosen = this.optionsService.getChosenPrimaryOptions();
    this.doorType = this.primaryOptionsChosen[0].shortName; // S&C, MTR, MTR3 are possibilities
    if (this.doorType === 'S&C') {
      this.getScOptionsList();
    } else if (this.doorType === 'MTR' || 'MTR3') {
      this.getMitOptionsList();
    }
    console.log(this.doorType);
    console.log(this.doorOptionsList);
  }

  getScOptionsList() {
    this.doorOptionsList = this.optionsService.scDoorOptionsList;
  }

  getMitOptionsList() {
    this.doorOptionsList = this.optionsService.miterDoorOptionsList;
  }

  ngOnInit() {
  }

}
