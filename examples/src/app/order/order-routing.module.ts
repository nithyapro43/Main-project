import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Order1Component } from './order1/order1.component';
import { Order2Component } from './order2/order2.component';


const routes: Routes = [
  
    {path:'order1',component:Order1Component},
    {path:'order2',component:Order2Component}
  ]
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
