import { Component, OnInit } from '@angular/core';
import { productdata } from 'src/app/models/product-data';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  data = productdata
  constructor() { }
showModal= false;
  ngOnInit(): void {

  }
  onCardClick() {
    this.showModal = true;
  }

}
