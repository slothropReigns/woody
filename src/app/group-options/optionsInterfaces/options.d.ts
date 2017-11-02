import { OptionConfiguration } from './option-configuration';
import { SelectionItem } from './selectionItem';

export interface Option {
    config: OptionConfiguration;
    opt: SelectionItem[];
}
