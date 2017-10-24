import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CopeAndStickPrice, Miter3InchPrice, MiterPrice, Wood } from './shared/wood.model';

@Injectable()
export class WoodsService {
  woodsChanged = new Subject<Wood[]>();


  /*
  Wood Object is
      .name
      .shortName
      .description
      .imgPath
      .copeAndStickPrice: [fO, fP, rP]
      .miterPrice: [fO, fP, rP]
      .miter3InchPrice: [fO, fP, rP]
      .slab price
                    (for reference, fO = frameOnly, fP = flatPanel, rp = raisedPanel
     */


  private woods: Wood[] = [
    new Wood(
      'Alder - Clear',
      'Clr.Alder',
      'Clear Alder Description Goes Here',
      'imgPath',
      [ new CopeAndStickPrice(13.16, 17.14, 19.99) ],
      [ new MiterPrice(15.84, 19.72, 23.24) ],
      [ new Miter3InchPrice(17.64, 20.68, 23.99) ],
      15.83),
    new Wood(
      'Alder - Knotty',
      'K.Alder',
      'Knotty Alder Description Goes Here',
      'imgPath',
      [ new CopeAndStickPrice(12.10, 15.84, 17.42) ],
      [ new MiterPrice(15.32, 18.80, 20.96) ],
      [ new Miter3InchPrice(16.44, 19.30, 21.46) ],
      12.79) ];


  constructor() {
  }

  getWoods() {
    this.woodsChanged.next(this.woods.slice());
  }

}
