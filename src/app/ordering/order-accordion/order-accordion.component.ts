import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WoodsService } from '../../shared/woods.service';
import { Wood } from '../../shared/wood.model';

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

    ngOnInit() {
        /*this.subscription = this.woodsService.woodsChanged
          .subscribe(
            (woods: Wood[]) => {
              this.woods = woods;
            });*/
        this.getWoodsUpdate();
    }

    getWoodsUpdate() {
        this.woodsService.getWoods().subscribe(
            woods => {
                console.log(woods);
                this.woods = woods;
            }
        );
    }
}
