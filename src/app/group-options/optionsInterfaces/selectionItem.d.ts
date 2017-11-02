import { Price } from './price';
import { OptionConfiguration } from './option-configuration';

export interface SelectionItem { // representing individual menu / dropdown choices
    name: string;
    shortName: string; // shortname used in part numbers / summaries / cut-sheets etc.
    imagePath?: string;
    note?: string;
    price?: Price;
    config?: OptionConfiguration; // configures whether individual choice is shown
}
