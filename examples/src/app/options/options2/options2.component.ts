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
  this.childevent.emit(this.selectedOrders); 
  this.visible = false;
 }


 cancelOrders(){
  this.visible = false;
 }
    
    ngOnInit() {
   
      this.orders= [
         
         {code:1,itemname:'Idly',quantity:5},
         {code:2,itemname:'Dosa',quantity:10},
         {code:3,itemname:'Pongal',quantity:12},
         {code:4,itemname:'Upma',quantity:8},
         {code:5,itemname:'Kesari',quantity:6}
        
        
    ];
   
  }




}
