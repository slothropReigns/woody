import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Wood } from '../shared/wood.model';
import { WoodsService } from '../woods.service';

@Component({
  selector: 'app-order-accordion',
  templateUrl: './order-accordion.component.html',
  styleUrls: [ './order-accordion.component.css' ]
})

export class OrderAccordionComponent implements OnInit {
  woods: Wood[];
  subscription: Subscription;

  constructor(private woodsService: WoodsService) {
  }

  getWoodsUpdate() {
    this.woods = this.woodsService.getWoods();
  }

  ngOnInit() {
    this.subscription = this.woodsService.woodsChanged
      .subscribe(
        (woods: Wood[]) => {
          this.woods = woods;
        });
    this.getWoodsUpdate();
  }
}
