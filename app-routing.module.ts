import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'customer',
    loadChildren:() =>import('./customer/customer.module').then(x=>x.CustomerModule)
  },
  {
    path:'filter',
    loadChildren:() =>import('./filter/filter.module').then(x=>x.FilterModule)
  },
  {
    path:'options',
    loadChildren:() =>import('./options/options.module').then(x=>x.OptionsModule)
  },
  {
    path:'order',
    loadChildren:() =>import('./order/order.module').then(x=>x.OrderModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
