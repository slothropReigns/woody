import {Component, OnInit} from '@angular/core';
import {OptionsService} from '../../../options.service';
import {SelOption} from '../../../optionsInterfaces/options';
import {SelChoice} from '../../../optionsInterfaces/selectionItem';
import {OptsChosenService} from '../../../opts-chosen.service';

@Component({
  selector: 'app-door-options',
  templateUrl: './door-options.component.html',
  styles: []
})
export class DoorOptionsComponent implements OnInit {
  primaryOptionsChosen: SelChoice[] = [];
  doorOptionsList: SelOption[] = [];
  doorOptionsChosen: SelChoice[] = [];
  doorType: string;

  constructor(private optionsService: OptionsService,
              private optsChosenService: OptsChosenService) {
    this.optsChosenService.optionsChosenPing.subscribe(
      ping => {
        this.getDoorType();
        console.log(ping);
      }
    );
  }

  /*fetches s&c or miter options depending on what was selected initially*/
  getDoorType() {
    this.doorOptionsList = this.optionsService.getDoorOptions();
  }

  ngOnInit() {
  }

}
