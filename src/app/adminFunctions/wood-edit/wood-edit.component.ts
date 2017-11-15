import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Wood } from '../../shared/wood.model';
import { WoodsService } from '../../shared/woods.service';


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
  addingNewWood: boolean;
  addedAlert: boolean;
  updatedAlert: boolean;

  constructor(private woodsService: WoodsService) {
  }

  ngOnInit() {
    this.addedAlert = false;
    this.getWoods();
  }

// TODO move sub to oninit?
  getWoods() {
    console.log('getwoods called');
    this.woodsService.getWoods().subscribe(
      woods => {
        console.log(woods);
        this.woods = woods;
        if (!this.selectedWood) {
          this.selectedWood = woods[ 0 ];
        }
      }
    );
  }

  onSubmitWoodForm() {
    return;
  }

  onSelectWood(value: number) {
    console.log(this.selectedWood.name);
    this.selectedWood = this.woods[ value ];
  }

  onAddWood() {
    this.woodsService.addNewWood(this.selectedWood);
    console.log('added (woodEditComponent)');
    this.addingNewWood = false;
    this.addedAlert = true;
  }

  onUpdateWood(wood: Wood) {
    this.woodsService.updateWood(wood);
    this.updatedAlert = true;
  }

  onDeleteWood(id: string) {

  }

  onNewWood() {
      console.log('new Wood() called');
      this.selectedWood = {
      id: '',
      name: '',
      shortName: '',
      description: '',
      imagePath: '',
      copeAndStickPriceFo: null, copeAndStickPriceFp: null, copeAndStickPriceRp: null,
      miterPriceFo: null, miterPriceFp: null, miterPriceRp: null,
      miter3InchPriceFo: null, miter3InchPriceFp: null, miter3InchPriceRp: null,
      slabPrice: null,
    };
    this.addingNewWood = true;
  }

  onCancelAddWood() {
    this.selectedWood = this.woods[ 0 ];
    this.addingNewWood = false;
  }

  onCloseAlert() {
    this.addedAlert = false;
    this.updatedAlert = false;
  }
}
