import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Order1Component } from './order1/order1.component';
import { Order2Component } from './order2/order2.component';
import { TableModule } from 'primeng/table';

const routes: Routes = [
  
    {path:'orders',component:Order1Component},
    {path:'order2',component:Order2Component}
  ]
  


@NgModule({
  imports: [
    TableModule,
    RouterModule.forChild(routes)
  ],
})
export class OrderRoutingModule { }
