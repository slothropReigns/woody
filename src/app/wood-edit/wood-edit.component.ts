import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-wood-edit',
  templateUrl: './wood-edit.component.html',
  styleUrls: ['./wood-edit.component.css']
})
export class WoodEditComponent implements OnInit {
  woodEditForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmitWoodForm() {
    return;
  }
}
