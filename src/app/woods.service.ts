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

  // dummy woods
  private woods: Wood[] = [
    new Wood(
      'Alder - Clear',
      'Clr.Alder',
      'Clear Alder Description Goes Here',
      'imgPath',
      new CopeAndStickPrice(13.16, 17.14, 19.99),
      new MiterPrice(15.84, 19.72, 23.24),
      new Miter3InchPrice(17.64, 20.68, 23.99),
      15.83),
    new Wood(
      'Alder - Knotty',
      'K.Alder',
      'Knotty Alder Description Goes Here',
      'imgPath',
      new CopeAndStickPrice(12.10, 15.84, 17.42),
      new MiterPrice(15.32, 18.80, 20.96),
      new Miter3InchPrice(16.44, 19.30, 21.46),
      12.79),
    new Wood(
      'Beech',
      'Beech',
      'Beech Description Goes Here',
      'imgPath',
      new CopeAndStickPrice(13.61, 17.06, 20.88),
      new MiterPrice(16.76, 20.22, 24.84),
      new Miter3InchPrice(18.48, 21.55, 25.74),
      16.64),
    new Wood(
      'Cherry',
      'Cherry',
      'Cherry Description Goes Here',
      'imgPath',
      new CopeAndStickPrice(14.55, 18.12, 21.73),
      new MiterPrice(17.84, 21.49, 24.96),
      new Miter3InchPrice(18.82, 22.64, 25.79),
      16.94),
    new Wood(
      'Cherry - Knotty',
      'Kn.Cherry',
      'Knotty Cherry Description Goes Here',
      'imgPath',
      new CopeAndStickPrice(13.13, 16.62, 19.85),
      new MiterPrice(17.23, 20.25, 24.50),
      new Miter3InchPrice(19.18, 21.50, 25.31),
      16.26),
    new Wood(
      'Cypress',
      'Cypress',
      'Cypress Description Goes Here',
      'imgPath',
      new CopeAndStickPrice(0, 0, 22.30),
      new MiterPrice(0, 0, 25.86),
      new Miter3InchPrice(0, 0, 26.73),
      17.52),
    new Wood(
      'Hickory',
      'Hickory',
      'Hickory Description Goes Here',
      'imgPath',
      new CopeAndStickPrice(13.28, 16.78, 22.00),
      new MiterPrice(16.36, 19.71, 23.55),
      new Miter3InchPrice(17.99, 20.72, 24.24),
      15.11),
    new Wood(
      'Hickory - Knotty',
      'Kn.Hickory',
      'Knotty Hickory Description Goes Here',
      'imgPath',
      new CopeAndStickPrice(13.33, 0, 20.33),
      new MiterPrice(16.94, 0, 24.47),
      new Miter3InchPrice(18.59, 0, 25.22),
      15.88),
    new Wood(
      'Hard Maple',
      'H.Maple',
      'Hard Maple Description Goes Here',
      'imgPath',
      new CopeAndStickPrice(13.61, 17.51, 21.09),
      new MiterPrice(16.92, 20.71, 24.72),
      new Miter3InchPrice(18.55, 21.87, 25.57),
      16.15) ];
  // finish dummy woods

  constructor() {
  }

  getWoods() {
    return this.woods.slice();
  }

  getWood(id: number) {
    return this.woods[ id ];
  }

  addNewWood(newWood: Wood) {
    return;
  }

  updateWood(id: number) {
    return;
  }

  deleteWood(id: number) {

  }

}

// TODO timestamp wood record so we know when it was last updated
// TODO when firebase updates the woods list, clear the list first of hardcoded data
