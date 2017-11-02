import { Component, OnInit } from '@angular/core';
import { Option } from '../shared/options';

@Component({
  selector: 'app-group-options',
  templateUrl: './group-options.component.html',
  styleUrls: [ './group-options.component.css' ]
})
export class GroupOptionsComponent implements OnInit {
  outsideEdge: Option;
  insideProfile: Option;
  panelProfile: Option;
  doorStyle: Option;
  archLayout: Option;
  multiPanel: Option;

  constructor() {
    this.panelProfile.opt = [
      { name: 'Cove RP', shortName: 'CoveRP', imagePath: '#', note: 'Deep-Cut Profile Available' },
      { name: 'Shaker RP', shortName: 'ShakerRP', imagePath: '#', note: 'Deep-Cut Profile Available' },
      { name: 'Ogee RP', shortName: 'OgeeRP', imagePath: '#', note: 'Deep-Cut Profile Available' },
      { name: 'Pillow RP', shortName: 'PillowRP', imagePath: '#', note: '' },
      { name: 'Ogee with Bead', shortName: 'OgeeW/Bead', imagePath: '#', note: 'Deep-Cut Profile Available' },
      { name: '3/8" Flat Panel', shortName: '3/8"FP', imagePath: '#', note: '' },
      { name: 'Custom-R (Radius)', shortName: 'Custom-R', imagePath: '#', note: '' },
      { name: 'Custom-S (Square)', shortName: 'Custom-S', imagePath: '#', note: '' },
    ];

    this.doorStyle.opt = [
      { name: 'Square (Standard)', shortName: 'STD', imagePath: '#' },
      { name: 'Eyebrow', shortName: 'E-Brow', imagePath: '#' },
      { name: 'Shouldered Eyebrow', shortName: 'SH.E-Brow', imagePath: '#' },
      { name: 'Cathedral', shortName: 'CATH', imagePath: '#' },
    ];

    this.outsideEdge.opt = [
      { name: 'Square', shortName: 'SQ.', imagePath: '#' },
      { name: 'Square', shortName: 'SQ.', imagePath: '#' },
      { name: '1/16" Roundover', shortName: '1/16"R', imagePath: '#' },
      { name: '1/8" Roundover', shortName: '1/8"R', imagePath: '#' },
      { name: '1/4" Roundover', shortName: '1/4"R', imagePath: '#' },
      { name: '3/8" Roundover', shortName: '3/8"R', imagePath: '#' },
      { name: 'STD', shortName: 'STD', imagePath: '#' },
      { name: 'STD-F', shortName: 'STD-F', imagePath: '#' },
      { name: 'A-F', shortName: 'A-F', imagePath: '#' },
      { name: 'H-F', shortName: 'H-F', imagePath: '#' },
      { name: '45° Chamfer', shortName: '45°', imagePath: '#' },
      { name: 'Cab-D', shortName: 'Cab-D', imagePath: '#', note: 'This edge not sanded!' },
      { name: 'K', shortName: 'K', imagePath: '#' },
      { name: 'SB', shortName: 'SB', imagePath: '#' },
      { name: 'RS', shortName: 'RS', imagePath: '#' },
    ];

    this.insideProfile.opt = [
      { name: 'Bead', shortName: 'Bead', imagePath: '#', note: '' },
      { name: 'Shaker', shortName: 'Shaker', imagePath: '#', note: '' },
      { name: 'Ogee', shortName: 'Ogee', imagePath: '#', note: '' },
    ];

    this.multiPanel.opt = [
      { name: '1x1 Standard', shortName: '1x1', imagePath: '#', note: '' },
      { name: '1x2 Square Over Square', shortName: '1x2', imagePath: '#' },
      { name: '1x3 Square Over Square', shortName: '1x2', imagePath: '#' },
      { name: '1x4 Square Over Square', shortName: '1x2', imagePath: '#' },
      { name: '1x5 Square Over Square', shortName: '1x2', imagePath: '#' },
      { name: '1x6 Square Over Square', shortName: '1x2', imagePath: '#' },
      { name: '2x1 Square Beside Square', shortName: '1x2', imagePath: '#' },
      { name: '3x1 Square Beside Square', shortName: '1x2', imagePath: '#' },
      { name: '4x1 Square Beside Square', shortName: '1x2', imagePath: '#' },
      { name: '5x1 Square Beside Square', shortName: '1x2', imagePath: '#' },
      { name: '6x1 Square Beside Square', shortName: '1x2', imagePath: '#' },
      { name: '2x2 Grid', shortName: '1x2', imagePath: '#' } ];

    this.archLayout.opt = [
      { name: 'Top (Standard)', shortName: 'STD', imagePath: '#' },
      { name: 'Left / Right (As Pair)', shortName: 'PAIR', imagePath: '#' },
      { name: 'Top and Bottom', shortName: 'DBL', imagePath: '#' } ];
  }

  ngOnInit() {
  }
}

