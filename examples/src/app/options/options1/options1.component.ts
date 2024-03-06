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

  // product: order[] = [];

  openPopup() {
    this.visible = true;
  }


  addOrders(newOrders: order[]) {
    this.receivedOrders = this.receivedOrders.concat(newOrders);
    this.code1 = this.code;
    this.name1 = this.itemname;
    this.quantity1 = this.quantity;
    this.visible = false;
  }

  deleteOrder(selectedorder: order) {
    const index = this.receivedOrders.findIndex(product => product.code === selectedorder.code);
    if (index !== -1) {
      this.receivedOrders.splice(index, 1);
    }
  }



}
