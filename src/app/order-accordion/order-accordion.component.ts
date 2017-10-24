import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-accordion',
  templateUrl: './order-accordion.component.html',
  styleUrls: [ './order-accordion.component.css' ]
})

export class OrderAccordionComponent implements OnInit {
  oneAtATime: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

}
