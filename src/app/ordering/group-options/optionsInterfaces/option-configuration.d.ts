/*configuration for both options as a whole & individual choices
these opt bits are for conditionally listing options in menus
for example, if the door is a miter frame only, you would only
want to display options where ( mit === true && fo === true )*/
export interface OptionConfiguration {
    cs: boolean;
    mit: boolean;
    fo: boolean;
    fp: boolean;
    rp: boolean;
}
