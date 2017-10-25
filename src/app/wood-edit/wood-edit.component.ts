import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Wood } from '../shared/wood.model';
import { WoodsService } from '../woods.service';


@Component({
  selector: 'app-wood-edit',
  templateUrl: './wood-edit.component.html',
  styleUrls: [ './wood-edit.component.css' ]
})
export class WoodEditComponent implements OnInit {
  // woodEditForm: FormGroup;
  woods: Wood[];
  subscription: Subscription;
  selectedWood: Wood;
  placeholder: string;

  constructor(private woodsService: WoodsService) {
  }

  ngOnInit() {
    this.subscription = this.woodsService.woodsChanged
      .subscribe(
        (woods: Wood[]) => {
          this.woods = woods;
        });
    this.woods = this.woodsService.getWoods();
    // this.woodEditForm = new FormGroup({
    //   'name': new FormControl()
    // });
    this.selectedWood = this.woods[0];
  }

  onSubmitWoodForm() {
    return;
  }

  onSelectWood(value: number) {
    this.selectedWood = this.woodsService.getWood(value);
    console.log(this.selectedWood.name);

  }
}
