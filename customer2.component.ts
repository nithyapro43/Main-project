import { Component,  EventEmitter,  Input,  Output,  ViewChild } from '@angular/core';
import { customermodel } from '../../model';

@Component({
  selector: 'app-customer2',
  templateUrl: './customer2.component.html',
  styleUrl: './customer2.component.css'
})
export class Customer2Component {
  

  @Input()
  visible!: boolean;
  @Output()  childevent: EventEmitter<customermodel[]>=new EventEmitter<customermodel[]>();
  
  customers:customermodel[] =[];
  customerName: string = '';
  address1: string = '';
  address2: string = '';
  city: string = '';
  state: string = '';
  ID:number=0;

 saveCustomer(){
 let singlecustomer:customermodel={
   ID:this.ID,
   customerName: this.customerName,
   address1: this.address1,
   address2: this.address2,
   city: this.city,
   state: this.state
 };
  this.customers.push(singlecustomer);
  this.childevent.emit(this.customers);  
  this.ID=0;
  this.customerName = '';
  this.address1 = '';
  this. address2= '';
  this.city='';
  this.state='';
  
 }

 cancelCustomer(){
  this.visible = false;
 }
  }

