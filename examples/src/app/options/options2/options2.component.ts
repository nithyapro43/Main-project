import { Component, EventEmitter, Input, Output } from '@angular/core';
import { order } from '../optionsmodel';


@Component({
  selector: 'app-options2',
  templateUrl: './options2.component.html',
  styleUrl: './options2.component.css'
})
export class Options2Component {
  @Input()
  visible!: boolean;
  @Output()  childevent: EventEmitter<order[]>=new EventEmitter<order[]>();
  
  orders:order[] =[];
  selectedOrders: order[] = [];
  code:string='';
    name:string='';
    category:string='';
    quantity:string='';
  

  addOrders(){
    const sortedSelectedOrders: order[] = [];
      for (const order of this.orders) {
        const selectedOrder = this.selectedOrders.find(o => o.code === order.code);
        if (selectedOrder) {
          sortedSelectedOrders.push(selectedOrder);
        }
      }
      this.childevent.emit(sortedSelectedOrders); 
      this.visible = false;
   }
 


 cancelOrders(){
  this.visible = false;
 }
    
    ngOnInit() {
   
      this.orders= [
         
         {code:'1',itemname:'Idly',quantity:'5'},
         {code:'2',itemname:'Dosa',quantity:'10'},
         {code:'3',itemname:'Pongal',quantity:'12'},
         {code:'4',itemname:'Upma',quantity:'8'},
         {code:'5',itemname:'Kesari',quantity:'6'}
        
        
    ];
   
  }

  handleSelection(event: any, product: order) {
    if (event.checked) {
      this.selectedOrders.push(product);
    } else {
      const index = this.selectedOrders.findIndex(p => p.code === product.code);
      if (index !== -1) {
        this.selectedOrders.splice(index, 1);
      }
    }
  }


}
