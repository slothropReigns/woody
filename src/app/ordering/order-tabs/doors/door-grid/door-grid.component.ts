import {Component} from '@angular/core';

import {OptionsService} from '../../../options.service';
import {SelOption} from '../../../optionsInterfaces/options';

@Component({
  selector: 'app-door-grid',
  templateUrl: './door-grid.component.html',
  styles: ['']
})
export class DoorDetailsComponent {
  doorOptionsList: SelOption[] = [];

  constructor(private optionsService: OptionsService) {
    this.doorOptionsList = this.optionsService.scDoorOptionsList;
    /*get options for my grid*/

  }
}


