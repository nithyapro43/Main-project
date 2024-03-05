import { Component } from '@angular/core';
import { order } from '../optionsmodel';

@Component({
  selector: 'app-options1',
  templateUrl: './options1.component.html',
  styleUrl: './options1.component.css'
})
export class Options1Component {

  visible:boolean=false;
  Receivedproducts:order[] = [];
  code:string='';
  itemname:string='';
  quantity:string='';
  
 code1="";
  name1="";
  category1="";
  quantity1="";
  
  product: order[] = [];
 
  openPopup(){
  this.visible=true;
  }


  addOutStudents(prod: order[]){
this.Receivedproducts = prod;
  this.code1=this.code;
this.name1=this.itemname;
 this.quantity1=this.quantity;
 this.visible=false;
   }
  
   deleteProduct(index: number) {
    this.Receivedproducts.splice(index, 1); 
  }



}
