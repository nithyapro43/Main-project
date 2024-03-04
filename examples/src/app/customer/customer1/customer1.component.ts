import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { customermodel } from '../../model';




@Component({
  selector: 'app-customer1',
  templateUrl: './customer1.component.html',
  styleUrl: './customer1.component.css'
})
export class Customer1Component {
  
  customers: any[]=[];
  Receivedcustomers: customermodel[] = [];
  visible: boolean = false;
  editingRowIndex: number = -1;
  
  ngOnInit() {
   
  this.customers = [
    { customerName: 'Prema', address1: '123 Main St', address2: 'Apt 101', city: 'Mysuru', state: 'KA' },
    { customerName: 'Preethi', address1: '456 Elm St', address2: 'Apt 104', city: 'Bangalore', state: 'KA' },
    { customerName: 'Ram', address1: '456 Elm St', address2: 'Apt 501', city: 'Hassan', state: 'KA' },
    { customerName: 'Himath', address1: ' 467 Main St', address2: 'Apt 109 ', city: 'Mangalore', state: 'KA'},       
    { customerName: 'Prashanth', address1: '986 Main St ', address2: ' Apt 301', city: 'Dharwad ', state: 'KA '}, 
    { customerName: 'Nithya', address1: ' 287 Main St', address2: 'Apt 102 ', city: 'Hubli', state: ' KA'}, 
    { customerName: 'Lakshmi ', address1: '479 Main St ', address2: ' Apt 701', city: 'Mandya ', state: ' KA'},
    { customerName: 'Nagendra', address1: ' 835 Main St', address2: 'Apt 107 ', city: 'Maddur ', state: ' KA'}, 
    { customerName: 'Kumar', address1: '945 Main St ', address2: ' Apt 401', city: 'Chikmagalur ', state: 'KA'}, 
    { customerName: 'Chari ', address1: ' 376 Main St', address2: 'Apt 901 ', city: 'Madekeri', state: ' KA'},
    { customerName: 'Prema', address1: '123 Main St', address2: 'Apt 101', city: 'Mysuru', state: 'KA' },
    { customerName: 'Preethi', address1: '456 Elm St', address2: 'Apt 104', city: 'Bangalore', state: 'KA' },
    { customerName: 'Ram', address1: '456 Elm St', address2: 'Apt 501', city: 'Hassan', state: 'KA' },
    { customerName: 'Himath', address1: ' 467 Main St', address2: 'Apt 109 ', city: 'Mangalore', state: 'KA'},       
    { customerName: 'Prashanth', address1: '986 Main St ', address2: ' Apt 301', city: 'Dharwad ', state: 'KA '}, 
    { customerName: 'Nithya', address1: ' 287 Main St', address2: 'Apt 102 ', city: 'Hubli', state: ' KA'}, 
    { customerName: 'Lakshmi ', address1: '479 Main St ', address2: ' Apt 701', city: 'Mandya ', state: ' KA'},
    { customerName: 'Nagendra', address1: ' 835 Main St', address2: 'Apt 107 ', city: 'Maddur ', state: ' KA'}, 
    { customerName: 'Kumar', address1: '945 Main St ', address2: ' Apt 401', city: 'Chikmagalur ', state: 'KA'}, 
    { customerName: 'Chari ', address1: ' 376 Main St', address2: 'Apt 901 ', city: 'Madekeri', state: ' KA'}
    
];
this.Receivedcustomers = [...this.customers];
  }


  searchByName(event: any) {
    const name = event.target.value;
    this.Receivedcustomers = this.customers.filter(customer =>
      customer.customerName.toLowerCase().includes(name.toLowerCase())
    );
  }
 

ID:number=0;
customerName: string = '';
address1: string = '';
address2: string = '';
city: string = '';
state: string = '';

id1=0;
customerName1="";
address11="";
address21="";
city1="";
state1="";

openPopup(){
this.visible=true;
}

addOutStudents(cust: customermodel[]){
  this.Receivedcustomers = [...this.customers];
this.Receivedcustomers =this.Receivedcustomers.concat(cust) ;
this.id1=this.ID;
this.customerName1=this.customerName;
this.address11=this.address1;
this.address21=this.address2;
this.city1=this.city;
this.state1=this.state;
this.visible=false;
 }
 

 startEditing(rowIndex: number) {
  this.editingRowIndex = rowIndex;
}

saveRow(rowIndex: number) {
  this.editingRowIndex = -1; 
}

cancelEditRow() {
  this.editingRowIndex = -1; 
}

deleteRow(rowIndex: number) {
  alert('Are you sure want to delete this row')
  this.Receivedcustomers.splice(rowIndex, 1);
}

}

