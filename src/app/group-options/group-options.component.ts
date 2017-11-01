import { Component, OnInit } from '@angular/core';

interface Option {
  name: string;
  shortName: string;
  imagePath: string;
  note: string;
  price?: number;
}

@Component({
  selector: 'app-group-options',
  templateUrl: './group-options.component.html',
  styleUrls: [ './group-options.component.css' ]
})
export class GroupOptionsComponent implements OnInit {
  outsideEdge: Option[] = [
    { name: 'Square', shortName: 'SQ.', imagePath: '#', note: '' },
    { name: '1/16" Roundover', shortName: '1/16"R', imagePath: '#', note: '' },
    { name: '1/8" Roundover', shortName: '1/8"R', imagePath: '#', note: '' },
    { name: '1/4" Roundover', shortName: '1/4"R', imagePath: '#', note: '' },
    { name: '3/8" Roundover', shortName: '3/8"R', imagePath: '#', note: '' },
    { name: 'STD', shortName: 'STD', imagePath: '#', note: '' },
    { name: 'STD-F', shortName: 'STD-F', imagePath: '#', note: '' },
    { name: 'A-F', shortName: 'A-F', imagePath: '#', note: '' },
    { name: 'H-F', shortName: 'H-F', imagePath: '#', note: '' },
    { name: '45° Chamfer', shortName: '45°', imagePath: '#', note: '' },
    { name: 'Cab-D', shortName: 'Cab-D', imagePath: '#', note: 'This edge not sanded!' },
    { name: 'K', shortName: 'K', imagePath: '#', note: '' },
    { name: 'SB', shortName: 'SB', imagePath: '#', note: '' },
    { name: 'RS', shortName: 'RS', imagePath: '#', note: '' },
  ];

  insideProfile: Option[] = [
    { name: 'Bead', shortName: 'Bead', imagePath: '#', note: '' },
    { name: 'Shaker', shortName: 'Shaker', imagePath: '#', note: '' },
    { name: 'Ogee', shortName: 'Ogee', imagePath: '#', note: '' },
  ];

  panelProfile: Option[] = [
    { name: 'Cove RP', shortName: 'CoveRP', imagePath: '#', note: 'Deep-Cut Profile Available' },
    { name: 'Shaker RP', shortName: 'ShakerRP', imagePath: '#', note: 'Deep-Cut Profile Available' },
    { name: 'Ogee RP', shortName: 'OgeeRP', imagePath: '#', note: 'Deep-Cut Profile Available' },
    { name: 'Pillow RP', shortName: 'PillowRP', imagePath: '#', note: '' },
    { name: 'Ogee with Bead', shortName: 'OgeeW/Bead', imagePath: '#', note: 'Deep-Cut Profile Available' },
    { name: '3/8" Flat Panel', shortName: '3/8"FP', imagePath: '#', note: '' },
    { name: 'Custom-R (Radius)', shortName: 'Custom-R', imagePath: '#', note: '' },
    { name: 'Custom-S (Square)', shortName: 'Custom-S', imagePath: '#', note: '' },
  ];

  doorStyle: Option[] = [
    { name: 'Square (Standard)', shortName: 'STD', imagePath: '#', note: '' },
    { name: 'Eyebrow', shortName: 'E-Brow', imagePath: '#', note: '' },
    { name: 'Shouldered Eyebrow', shortName: 'SH.E-Brow', imagePath: '#', note: '' },
    { name: 'Cathedral', shortName: 'CATH', imagePath: '#', note: '' },
  ];

  archLayoutFO: Option[] = [
    { name: 'Top (Standard)', shortName: 'STD', imagePath: '#', note: '', price: 3.61 },
    { name: 'Left / Right (As Pair)', shortName: 'PAIR', imagePath: '', note: '', price: 7.21 },
    { name: 'Top and Bottom', shortName: 'DBL', imagePath: '', note: '', price: 8.73 },
  ];

  archLayoutFP: Option[] = [
    { name: 'Top (Standard)', shortName: 'STD', imagePath: '#', note: '', price: 5.88 },
    { name: 'Left / Right (As Pair)', shortName: 'PAIR', imagePath: '', note: '', price: 10.77 },
    { name: 'Top and Bottom', shortName: 'DBL', imagePath: '', note: '', price: 10.61 },
  ];

  archLayoutRP: Option[] = [
    { name: 'Top (Standard)', shortName: 'STD', imagePath: '#', note: '', price: 7.91 },
    { name: 'Left / Right (As Pair)', shortName: 'PAIR', imagePath: '', note: '', price: 11.45 },
    { name: 'Top and Bottom', shortName: 'DBL', imagePath: '', note: '', price: 15.12 },
  ];

  multiPanelFO: Option[] = [
    { name: '', shortName: '', imagePath: '', note: '', price: 0 },
    { name: '', shortName: '', imagePath: '', note: '', price: 0 },
    { name: '', shortName: '', imagePath: '', note: '', price: 0 },
    { name: '', shortName: '', imagePath: '', note: '', price: 0 },
    { name: '', shortName: '', imagePath: '', note: '', price: 0 },
    { name: '', shortName: '', imagePath: '', note: '', price: 0 },
    { name: '', shortName: '', imagePath: '', note: '', price: 0 },
    { name: '', shortName: '', imagePath: '', note: '', price: 0 },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
