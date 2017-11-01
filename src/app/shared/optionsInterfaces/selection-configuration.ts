export interface SelectionConfiguration {
  cs?: boolean; // these opt bits are for conditionally listing options in menus
  mit?: boolean; // for example, if the door is a miter frame only, you would only
  fo?: boolean; // want to display options where optMit && optFo
  fp?: boolean;
  rp?: boolean;
}
