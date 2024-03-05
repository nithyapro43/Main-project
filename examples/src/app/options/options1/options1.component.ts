import { Component } from '@angular/core';
import { order } from '../optionsmodel';

@Component({
  selector: 'app-options1',
  templateUrl: './options1.component.html',
  styleUrl: './options1.component.css'
})
export class Options1Component {

  visible: boolean = false;
  receivedOrders: order[] = [];
  code: string = '';
  itemname: string = '';
  quantity: string = '';

  code1 = "";
  name1 = "";
  quantity1 = "";

  product: order[] = [];

  openPopup() {
    this.visible = true;
  }


  addOrders(order: order[]) {
    this.receivedOrders = order;
    this.code1 = this.code;
    this.name1 = this.itemname;
    this.quantity1 = this.quantity;
    this.visible = false;
  }

  deleteOrder(index: number) {
    this.receivedOrders.splice(index, 1);
  }



}
