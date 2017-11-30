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
  doorOptionsList: Selection[] = [];
  doorOptionsChosen: SelectionItem[] = [];

  constructor(private optionsService: OptionsService) {
  }

  ngOnInit() {
  }

}
