import { Injectable } from '@angular/core';
import { Option } from './optionsInterfaces/options';

@Injectable()
export class OptionsService {
    outsideEdge: Option;
    insideProfile: Option;
    panelProfile: Option;
    doorStyle: Option;
    archLayout: Option;
    multiPanel: Option;

    constructor() {
        // .config = {...} these bits show whether this option is applicable / should be seen
        // on order form. So if a door is frame only, the app will only display options where
        //  [config.fo === true]
        this.panelProfile.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.panelProfile.opt = [
            { name: 'Cove RP', shortName: 'CoveRP', note: 'Deep-Cut Profile Available' },
            { name: 'Shaker RP', shortName: 'ShakerRP', note: 'Deep-Cut Profile Available' },
            { name: 'Ogee RP', shortName: 'OgeeRP', note: 'Deep-Cut Profile Available' },
            { name: 'Pillow RP', shortName: 'PillowRP' },
            { name: 'Ogee with Bead', shortName: 'OgeeW/Bead', note: 'Deep-Cut Profile Available' },
            { name: '3/8" Flat Panel', shortName: '3/8"FP' },
            { name: 'Custom-R (Radius)', shortName: 'Custom-R' },
            { name: 'Custom-S (Square)', shortName: 'Custom-S' }, ];

        this.doorStyle.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.doorStyle.opt = [ { name: 'Square (Standard)', shortName: 'STD' },
            { name: 'Eyebrow', shortName: 'E-Brow' },
            { name: 'Shouldered Eyebrow', shortName: 'SH.E-Brow' },
            { name: 'Cathedral', shortName: 'CATH' }, ];

        this.outsideEdge.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.outsideEdge.opt = [
            { name: 'Square', shortName: 'SQ.' },
            { name: 'Square', shortName: 'SQ.' },
            { name: '1/16" Roundover', shortName: '1/16"R' },
            { name: '1/8" Roundover', shortName: '1/8"R' },
            { name: '1/4" Roundover', shortName: '1/4"R' },
            { name: '3/8" Roundover', shortName: '3/8"R' },
            { name: 'STD', shortName: 'STD' },
            { name: 'STD-F', shortName: 'STD-F' },
            { name: 'A-F', shortName: 'A-F' },
            { name: 'H-F', shortName: 'H-F' },
            { name: '45° Chamfer', shortName: '45°' },
            { name: 'Cab-D', shortName: 'Cab-D', note: 'This edge not sanded!' },
            { name: 'K', shortName: 'K' },
            { name: 'SB', shortName: 'SB' },
            { name: 'RS', shortName: 'RS' }, ];

        this.insideProfile.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.insideProfile.opt = [
            { name: 'Bead', shortName: 'Bead' },
            { name: 'Shaker', shortName: 'Shaker' },
            { name: 'Ogee', shortName: 'Ogee' }
        ];

        this.multiPanel.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.multiPanel.opt = [
            { name: '1x1 Standard', shortName: '1x1' },
            { name: '1x2 Square Over Square', shortName: '1x2' },
            { name: '1x3 Square Over Square', shortName: '1x2' },
            { name: '1x4 Square Over Square', shortName: '1x2' },
            { name: '1x5 Square Over Square', shortName: '1x2' },
            { name: '1x6 Square Over Square', shortName: '1x2' },
            { name: '2x1 Square Beside Square', shortName: '1x2' },
            { name: '3x1 Square Beside Square', shortName: '1x2' },
            { name: '4x1 Square Beside Square', shortName: '1x2' },
            { name: '5x1 Square Beside Square', shortName: '1x2' },
            { name: '6x1 Square Beside Square', shortName: '1x2' },
            { name: '2x2 Grid', shortName: '1x2' } ];

        this.archLayout.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.archLayout.opt = [
            { name: 'Top (Standard)', shortName: 'STD' },
            { name: 'Left / Right (As Pair)', shortName: 'PAIR' },
            { name: 'Top and Bottom', shortName: 'DBL' } ];
    }
}
