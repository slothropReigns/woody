import {Injectable} from '@angular/core';
import {Wood} from '../shared/wood.model';
import {SelChoice} from './optionsInterfaces/selectionItem';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class OptsChosenService {
  optionsChosenPing = new Subject<boolean>();

  primaryOptionsChosen = [];

  scOptionsChosen = [];
  miterOptionsChosen = [];
  scDoorOptionsChosen = [];
  miterDoorOptionsChosen = [];
  scDfOptionsChosen = [];
  miterDfOptionsChosen = [];
  slabOptionsChosen = [];
  woodChosen: Wood;

  primaryOrderOptions = new Subject<SelChoice[]>();
  orderWoodType = new Subject<Wood>();

  constructor() {
  }

  confirmPrimaryOptions(opts: SelChoice[], wood: Wood) {
    this.primaryOptionsChosen = opts;
    this.woodChosen = wood;
    this.primaryOrderOptions.next(opts);
    this.orderWoodType.next(wood);
    this.optionsChosenPing.next();
  }

  getChosenPrimaryOptions() {
    return this.primaryOptionsChosen;
  }
}
