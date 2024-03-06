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
  
    handleSelection(event: any, product: productmodel) {
      if (event.checked) {
        this.selectedProducts.push(product);
      } else {
        const index = this.selectedProducts.findIndex(p => p.code === product.code);
        if (index !== -1) {
          this.selectedProducts.splice(index, 1);
        }
      }
    }

 addproducts(){
  const sortedselectedProducts: productmodel[] = [];
      for (const product of this.products) {
        const selectedProduct = this.selectedProducts.find(o => o.code === product.code);
        if (selectedProduct) {
          sortedselectedProducts.push(selectedProduct);
        }
      }
      this.childevent.emit(sortedselectedProducts); 
      this.visible = false;
 }


 cancelproducts(){
  this.visible = false;
 }
    
    ngOnInit() {
   
      this.products= [
         
         {code:'1',name:'Bamboo Watch',category:'Accessories',quantity:'24'},
         {code:'2',name:'Black Watch',category:'Accessories',quantity:'10'},
         {code:'3',name:'Blue Band',category:'Fitness',quantity:'15'},
         {code:'4',name:'Blue T-Shirt',category:'Clothing',quantity:'20'},
         {code:'5',name:'Bracelet',category:'Accessories',quantity:'10'}
        
        
    ];
   
  }
   
  

 
}
