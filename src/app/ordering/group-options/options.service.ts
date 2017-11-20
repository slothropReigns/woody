import { Injectable } from '@angular/core';
import { Selection } from './optionsInterfaces/options';

@Injectable()
export class OptionsService {

    // INDIVIDUAL OPTIONS
    panelProfile: Selection = new Selection();
    outsideEdge: Selection = new Selection();
    insideProfile: Selection = new Selection();
    doorStyle: Selection = new Selection();
    archLayout: Selection = new Selection();
    multiPanel: Selection = new Selection();
    frameType: Selection = new Selection();
    defFrameWidth: Selection = new Selection();
    grainDirection: Selection = new Selection();
    flatOrRaised: Selection = new Selection();
    boringOffset: Selection = new Selection();
    boringTab: Selection = new Selection();

    // ARRAY OF ALL OPTIONS
    optionsList: Selection[] = [];


    constructor() {

// PANEL PROFILE
        this.panelProfile.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.panelProfile.signPostTitle = 'Panel Profile';
        this.panelProfile.signPostText = 'Choose whether you want a raised or flat panel, and which profile you want' +
            'if a raised panel is chosen.';
        this.panelProfile.opt = [
            { name: 'Cove RP', shortName: 'COVE-RP', note: 'Deep-Cut Profile Available' },
            { name: 'Shaker RP', shortName: 'SHAKER-RP', note: 'Deep-Cut Profile Available' },
            { name: 'Ogee RP', shortName: 'OGEE-RP', note: 'Deep-Cut Profile Available' },
            { name: 'Pillow RP', shortName: 'PILLOW-RP' },
            { name: 'Ogee with Bead RP', shortName: 'OGEEwBEAD-RP', note: 'Deep-Cut Profile Available' },
            { name: '3/8" Flat Panel', shortName: '3/8"FP' },
            { name: 'Custom-R (Radius) RP', shortName: 'Custom-R-RP' },
            { name: 'Custom-S (Square) RP', shortName: 'Custom-S-RP' }, ];
// DOOR STYLE
        this.doorStyle.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.doorStyle.signPostTitle = 'Door Style';
        this.doorStyle.signPostText = 'Choose which door style you want for this order. Change the configuration' +
            'of individual doors further ahead in the ordering process.';
        this.doorStyle.opt = [ { name: 'Square (Standard)', shortName: 'STD' },
            { name: 'Eyebrow', shortName: 'E-Brow' },
            { name: 'Shouldered Eyebrow', shortName: 'SH.E-Brow' },
            { name: 'Cathedral', shortName: 'CATH' }, ];
// OUTSIDE EDGE
        this.outsideEdge.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.outsideEdge.signPostTitle = 'Outside Edge';
        this.outsideEdge.signPostText = 'Select the profile for the outer edge of the door\'s frame';
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
// INSIDE PROFILE
        this.insideProfile.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.insideProfile.signPostTitle = 'Inside Profile';
        this.insideProfile.signPostText = 'Select the profile for the inner edge of the door\'s frame';
        this.insideProfile.opt = [
            { name: 'Bead', shortName: 'Bead' },
            { name: 'Shaker', shortName: 'Shaker' },
            { name: 'Ogee', shortName: 'Ogee' }
        ];
// MULTI PANEL
// TODO fill in warranty info
        this.multiPanel.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.multiPanel.signPostTitle = 'Multi-Panel';
        this.multiPanel.signPostText = 'Adding a multiple panels to a door is a great way to increase structural' +
            'stability as well as a nice aesthetic. Doors over xx inches tall or wide require a center rail or' +
            'else we must void our warranty.';
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
// ARCH LAYOUT
        this.archLayout.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.archLayout.signPostTitle = 'Arch Layout';
        this.archLayout.signPostText = 'If you choose the option for Left / Right (as a pair), please make sure all' +
            'doors are ordered in even numbers or else make sure to mark which doors should not be pairs.';
        this.archLayout.opt = [
            { name: 'Top (Standard)', shortName: 'STD' },
            { name: 'Left / Right (As Pair)', shortName: 'PAIR' },
            { name: 'Top and Bottom', shortName: 'DBL' } ];
// FRAME TYPE ( cs/ mit / mit 3 )
        this.frameType.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.frameType.signPostTitle = 'Frame Type';
        this.frameType.signPostText = 'Choose which type of frame you wish to begin with.';
        this.frameType.opt = [
            { name: 'Stick and Cope', shortName: 'S&C' },
            { name: 'Miter - 2-3/8"', shortName: 'MTR' },
            { name: 'Miter - 3"', shortName: 'MTR3' } ];
// FRAME WIDTH
        this.defFrameWidth.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.defFrameWidth.signPostTitle = 'Frame Width';
        this.defFrameWidth.signPostText = 'Choose your default frame width for this order - individual stiles' +
            'and rails may be customized per-door further on in the ordering process.';
        this.defFrameWidth.opt = [
            { name: '2-3/8" - Standard', shortName: '2-3/8"' },
            { name: '2"', shortName: '2"' },
            { name: '3"', shortName: '3"' },
            { name: '4"', shortName: '4"' } ];
// GRAIN DIRECTION
        this.grainDirection.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.grainDirection.signPostTitle = 'Grain Direction';
        this.grainDirection.signPostText = 'Typically, customers choose vertical grain for doors and ' +
            'horizontal grain for drawer fronts.';
        this.grainDirection.opt = [
            { name: 'Vertical', shortName: 'V-GRAIN' },
            { name: 'Horizontal', shortName: 'H-GRAIN' } ];
// FLAT OR RAISED
        this.flatOrRaised.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.flatOrRaised.signPostTitle = 'Flat or Raised';
        this.flatOrRaised.signPostText = 'Select which style of inner panel you want for your doors.';
        this.flatOrRaised.opt = [
            { name: '3/8" Flat Panel', shortName: 'FP' },
            { name: '5/8" Raised Panel', shortName: 'RP' } ];
// BORING OFFSET
        this.boringOffset.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.boringOffset.signPostTitle = 'Boring Offset';
        this.boringOffset.signPostText = 'Select offset from top and bottom of door for hinge placement.' +
            ' Please not that doors of larger dimensions may need a third hinge added, and smaller doors' +
            ' may have offset reduced to better space the hinges on a smaller frame.';
        this.boringOffset.opt = [
            { name: '4"', shortName: '4"' },
            { name: '3"', shortName: '3"' },
            { name: '5"', shortName: '5"' } ];
// BORING TAB
        this.boringTab.config = { cs: false, mit: false, fo: false, fp: false, rp: false };
        this.boringTab.signPostTitle = 'Boring Tab';
        this.boringTab.signPostText = 'Boring Tab is the distance from the edge of the door to the edge of the bore hole';
        this.boringTab.opt = [
            { name: '3/16"', shortName: '3/16"' },
            { name: '3/32"', shortName: '3/32"' },
            { name: '1/8"', shortName: '1/8"' } ];

    }

    generateOptionsList() {
        this.optionsList[0] = this.panelProfile;
        this.optionsList[1] = this.outsideEdge;
        this.optionsList[2] = this.insideProfile;
        this.optionsList[3] = this.doorStyle;
        this.optionsList[4] = this.archLayout;
        this.optionsList[5] = this.multiPanel;
        this.optionsList[6] = this.frameType;
        this.optionsList[7] = this.defFrameWidth;
        this.optionsList[8] = this.grainDirection;
        this.optionsList[9] = this.flatOrRaised;
        this.optionsList[10] = this.boringOffset;
        this.optionsList[11] = this.boringTab;

        console.log(this.optionsList);
    }
}
