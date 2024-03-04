import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { Order1Component } from './order1/order1.component';
import { Order2Component } from './order2/order2.component';

@NgModule({
  declarations: [Order1Component,Order2Component],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
