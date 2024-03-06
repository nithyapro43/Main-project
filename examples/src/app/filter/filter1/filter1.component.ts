import { Component } from '@angular/core';
import { productmodel } from '../filtmodel';

@Component({
  selector: 'app-filter1',
  templateUrl: './filter1.component.html',
  styleUrl: './filter1.component.css'
})
export class Filter1Component {
  visible:boolean=false;
  Receivedproducts:productmodel[] = [];
  code:string='';
  name:string='';
  category:string='';
  quantity:string='';
  
 code1="";
  name1="";
  category1="";
  quantity1="";
  
  product: productmodel[] = [];
 
  openPopup(){
  this.visible=true;
  }


  addOutStudents(prod: productmodel[]){
this.Receivedproducts = this.Receivedproducts.concat(prod);
  this.code1=this.code;
this.name1=this.name;
 this.category1=this.category;
 this.quantity1=this.quantity;
 this.visible=false;
   }
  
   deleteProduct(selectedorder: productmodel) {

    const index = this.Receivedproducts.findIndex(product => product.code === selectedorder.code);
    if (index !== -1) {
      this.Receivedproducts.splice(index, 1);
    }
  }
   
  

}
