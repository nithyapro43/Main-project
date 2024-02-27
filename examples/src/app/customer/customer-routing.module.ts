import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Customer1Component } from './customer1/customer1.component';
import { Customer2Component } from './customer2/customer2.component';


const routes: Routes = [
  
  {path:'customer1',component:Customer1Component},
  {path:'customer2',component:Customer2Component}]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
