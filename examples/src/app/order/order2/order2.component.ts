import { Component, EventEmitter, Output } from '@angular/core';
import { order } from '../models';
import { Order1Component } from '../order1/order1.component';



@Component({
  selector: 'app-order2',
  templateUrl: './order2.component.html',
  styleUrl: './order2.component.css'
})
export class Order2Component  {
  @Output() dataUpdated = new EventEmitter<order>();
  
  value: string | undefined;

  itemName!: string;
  orderDate!: string;
  code: any;
  desc!: string;
orders: order[]=[];
order: order={itemName:'', orderDate:'', code:0, desc:''};


  addOrder(){
    debugger;
    this.order.itemName=this.itemName;
    this.order.orderDate=this.orderDate;
    this.order.code=this.code;
    this.order.desc=this.desc;
   this.dataUpdated.emit(this.order);

  }
}
