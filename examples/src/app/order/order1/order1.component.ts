import { Component } from '@angular/core';
import { order } from '../models';
@Component({
  selector: 'app-order1',
  templateUrl: './order1.component.html',
  styleUrl: './order1.component.css'
})
export class Order1Component {
  value: any;
showAddOrderPage=false;

  orders: order[] = [{
    "itemName": "Idly",
    "orderDate": "27-02-2024",
    "code": 1,
    "desc": "Normal Idli"
  },
  {
    "itemName": "Dosa",
    "orderDate": "22-02-2024",
    "code": 2,
    "desc": "Standard Dosa"
  },
  {
    "itemName": "Vada",
    "orderDate": "25-02-2024",
    "code": 3,
    "desc": "Uddin Vada"
  },
  {
    "itemName": "Pongal",
    "orderDate": "27-02-2024",
    "code": 4,
    "desc": "Special Pongal"
  },
  {
    "itemName": "Lemon Rice",
    "orderDate": "22-02-2024",
    "code": 5,
    "desc": "Figure Rice"
  },
  {
    "itemName": "Aloo Vada",
    "orderDate": "27-02-2024",
    "code": 4,
    "desc": "Special Vada"
  },
  {
    "itemName": "Bisi Bele Bath",
    "orderDate": "21-02-2024",
    "code": 4,
    "desc": "Special Bath"
  },
  {
    "itemName": "Vangibath",
    "orderDate": "22-02-2024",
    "code": 4,
    "desc": "Special Bath"
  },
  {
    "itemName": "Chow Chow Bath",
    "orderDate": "27-02-2024",
    "code": 4,
    "desc": "Special Bath"
  },
  {
    "itemName": "Pulihora",
    "orderDate": "27-02-2024",
    "code": 4,
    "desc": "Special Pulihora"
  }]

  filteredOrders: order[] = this.orders;
  filterGlobal(event: any) {
    const filterValue = event.target.value.toLowerCase();

    this.filteredOrders = this.orders.filter((order: any) => {
      return (
        order.itemName.toLowerCase().includes(filterValue) ||
        order.orderDate.toLowerCase().includes(filterValue) ||
        order.code.toString().toLowerCase().includes(filterValue) ||
        order.desc.toLowerCase().includes(filterValue)
      );
    });
  }
  openAddOrder(){
this.showAddOrderPage=true;
  }
  onDataUpdated(data:order){
    debugger;
  this.filteredOrders.push(data);
  this.showAddOrderPage=false;
  }
}



