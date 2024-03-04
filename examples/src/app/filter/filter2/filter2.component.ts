import { Component, EventEmitter, Input, Output } from '@angular/core';
import { productmodel } from '../filtmodel';

@Component({
  selector: 'app-filter2',
  templateUrl: './filter2.component.html',
  styleUrl: './filter2.component.css'
})
export class Filter2Component {
  @Input()
  visible!: boolean;
  @Output()  childevent: EventEmitter<productmodel[]>=new EventEmitter<productmodel[]>();
  
  products:productmodel[] =[];
  selectedProducts: productmodel[] = [];
  code:string='';
    name:string='';
    category:string='';
    quantity:string='';
  
 addproducts(){
  this.childevent.emit(this.selectedProducts); 
  this.visible = false;
 }


 cancelproducts(){
  this.visible = false;
 }
    
    ngOnInit() {
   
      this.products= [
         
         {code:'f230fh0g3',name:'Bamboo Watch',category:'Accessories',quantity:'24'},
         {code:'nvklal433',name:'Black Watch',category:'Accessories',quantity:'10'},
         {code:'zz21cz3c1',name:'Blue Band',category:'Fitness',quantity:'15'},
         {code:'244wgerg2',name:'Blue T-Shirt',category:'Clothing',quantity:'20'},
         {code:'h456wer53',name:'Bracelet',category:'Accessories',quantity:'10'}
        
        
    ];
   
  }
   

 
}
