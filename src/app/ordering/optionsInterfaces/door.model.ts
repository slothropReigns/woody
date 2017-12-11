import {SelChoice} from './selectionItem';

export class Door {
  primaryOptions: SelChoice[];
  secOptions: SelChoice[];
  itemOptions: any[];
  doorQty: number;
  doorWidth: number;
  doorHeight: number;
  doorBore: boolean;
  leftStileWidth: number;
  rightStileWidth: number;
  topRailWidth: number;
  bottomRailWidth: number;
  label: string;
}
