import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'


import { Order1Component } from './order1/order1.component';
import { Order2Component } from './order2/order2.component';

@NgModule({
  declarations: [Order1Component, Order2Component],
  imports: [
    CommonModule,
    OrderRoutingModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ],

})
export class OrderModule { }
