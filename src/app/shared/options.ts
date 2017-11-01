import { OptionConfiguration } from './optionsInterfaces/option-configuration';
import { SelectionItem } from './optionsInterfaces/selectionItem';

export interface Option {
  config: OptionConfiguration;
  opt: SelectionItem[];
}
