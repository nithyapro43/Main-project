import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { ButtonModule } from 'primeng/button';
import { Customer1Component } from './customer1/customer1.component';
import { Customer2Component } from './customer2/customer2.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [Customer1Component,Customer2Component],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ButtonModule,TableModule,
    FormsModule,DialogModule
  ],
  exports:[ButtonModule]
  
})
export class CustomerModule { }
