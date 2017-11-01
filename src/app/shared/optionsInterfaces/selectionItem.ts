import { Price } from './price';
import { SelectionConfiguration } from './selection-configuration';

export interface SelectionItem { // representing individual menu / dropdown choices
  name: string;
  shortName: string;
  imagePath?: string;
  note?: string;
  price?: Price;
  config: SelectionConfiguration;
}
