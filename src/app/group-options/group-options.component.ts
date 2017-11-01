import { Component, OnInit } from '@angular/core';
import { Option } from '../shared/options';

@Component({
  selector: 'app-group-options',
  templateUrl: './group-options.component.html',
  styleUrls: [ './group-options.component.css' ]
})
export class GroupOptionsComponent implements OnInit {
  outsideEdge: Option;


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

  archLayout: Option[] = [ // optCs: true, optFo: true, optFp: true, optRp: true
    {
      name: 'Top (Standard)', shortName: 'STD', imagePath: '#', note: '',
      priceCsFo: 3.61, priceCsFp: 5.88, priceCsRp: 7.91
    },
    {
      name: 'Left / Right (As Pair)', shortName: 'PAIR', imagePath: '', note: '',
      priceCsFo: 7.21, priceCsFp: 10.77, priceCsRp: 11.45
    },
    {
      name: 'Top and Bottom', shortName: 'DBL', imagePath: '', note: '',
      priceCsFo: 8.73, priceCsFp: 10.61, priceCsRp: 15.12
    },
  ];

// optCs: null, optMit: null, optFo: null, optFp: null, optRp: null
  multiPanel: Option[] = [
    { name: '1x1 Standard', shortName: '1x1', imagePath: '#', note: '', price: 0 },
    {
      name: '1x2 Square Over Square', shortName: '1x2', imagePath: '#', note: '',
      priceCsFo: 0, priceCsFp: 0, priceCsRp: 0,
      priceMitFo: 0, priceMitFp: 0, priceMitRp: 0,
      priceMit3Fo: 0, priceMit3Fp: 0, priceMit3Rp: 0
    },
    {
      name: '1x3 Square Over Square', shortName: '1x2', imagePath: '#', note: '',
      priceCsFo: 0, priceCsFp: 0, priceCsRp: 0,
      priceMitFo: 0, priceMitFp: 0, priceMitRp: 0,
      priceMit3Fo: 0, priceMit3Fp: 0, priceMit3Rp: 0
    },
    {
      name: '1x4 Square Over Square', shortName: '1x2', imagePath: '#', note: '',
      priceCsFo: 0, priceCsFp: 0, priceCsRp: 0,
      priceMitFo: 0, priceMitFp: 0, priceMitRp: 0,
      priceMit3Fo: 0, priceMit3Fp: 0, priceMit3Rp: 0
    },
    {
      name: '1x5 Square Over Square', shortName: '1x2', imagePath: '#', note: '',
      priceCsFo: 0, priceCsFp: 0, priceCsRp: 0,
      priceMitFo: 0, priceMitFp: 0, priceMitRp: 0,
      priceMit3Fo: 0, priceMit3Fp: 0, priceMit3Rp: 0
    },
    {
      name: '1x6 Square Over Square', shortName: '1x2', imagePath: '#', note: '',
      priceCsFo: 0, priceCsFp: 0, priceCsRp: 0,
      priceMitFo: 0, priceMitFp: 0, priceMitRp: 0,
      priceMit3Fo: 0, priceMit3Fp: 0, priceMit3Rp: 0
    },
    {
      name: '2x1 Square Beside Square', shortName: '1x2', imagePath: '#', note: '',
      priceCsFo: 0, priceCsFp: 0, priceCsRp: 0,
      priceMitFo: 0, priceMitFp: 0, priceMitRp: 0,
      priceMit3Fo: 0, priceMit3Fp: 0, priceMit3Rp: 0
    },
    {
      name: '3x1 Square Beside Square', shortName: '1x2', imagePath: '#', note: '',
      priceCsFo: 0, priceCsFp: 0, priceCsRp: 0,
      priceMitFo: 0, priceMitFp: 0, priceMitRp: 0,
      priceMit3Fo: 0, priceMit3Fp: 0, priceMit3Rp: 0
    },
    {
      name: '4x1 Square Beside Square', shortName: '1x2', imagePath: '#', note: '',
      priceCsFo: 0, priceCsFp: 0, priceCsRp: 0,
      priceMitFo: 0, priceMitFp: 0, priceMitRp: 0,
      priceMit3Fo: 0, priceMit3Fp: 0, priceMit3Rp: 0
    },
    {
      name: '5x1 Square Beside Square', shortName: '1x2', imagePath: '#', note: '',
      priceCsFo: 0, priceCsFp: 0, priceCsRp: 0,
      priceMitFo: 0, priceMitFp: 0, priceMitRp: 0,
      priceMit3Fo: 0, priceMit3Fp: 0, priceMit3Rp: 0
    },
    {
      name: '6x1 Square Beside Square', shortName: '1x2', imagePath: '#', note: '',
      priceCsFo: 0, priceCsFp: 0, priceCsRp: 0,
      priceMitFo: 0, priceMitFp: 0, priceMitRp: 0,
      priceMit3Fo: 0, priceMit3Fp: 0, priceMit3Rp: 0
    },
    {
      name: '2x2 Grid', shortName: '1x2', imagePath: '#', note: '',
      priceCsFo: 0, priceCsFp: 0, priceCsRp: 0,
      priceMitFo: 0, priceMitFp: 0, priceMitRp: 0,
      priceMit3Fo: 0, priceMit3Fp: 0, priceMit3Rp: 0
    },

  ];

  constructor() {
    this.outsideEdge.opt = [

      { name: 'Square', shortName: 'SQ.', imagePath: '#', note: '' },

    ];
  }

  ngOnInit() {
  }

// }
// { name: 'Square', shortName: 'SQ.', imagePath: '#', note: '' },
// { name: '1/16" Roundover', shortName: '1/16"R', imagePath: '#', note: '' },
// { name: '1/8" Roundover', shortName: '1/8"R', imagePath: '#', note: '' },
// { name: '1/4" Roundover', shortName: '1/4"R', imagePath: '#', note: '' },
// { name: '3/8" Roundover', shortName: '3/8"R', imagePath: '#', note: '' },
// { name: 'STD', shortName: 'STD', imagePath: '#', note: '' },
// { name: 'STD-F', shortName: 'STD-F', imagePath: '#', note: '' },
// { name: 'A-F', shortName: 'A-F', imagePath: '#', note: '' },
// { name: 'H-F', shortName: 'H-F', imagePath: '#', note: '' },
// { name: '45° Chamfer', shortName: '45°', imagePath: '#', note: '' },
// { name: 'Cab-D', shortName: 'Cab-D', imagePath: '#', note: 'This edge not sanded!' },
// { name: 'K', shortName: 'K', imagePath: '#', note: '' },
// { name: 'SB', shortName: 'SB', imagePath: '#', note: '' },
// { name: 'RS', shortName: 'RS', imagePath: '#', note: '' },
// ];
// }
