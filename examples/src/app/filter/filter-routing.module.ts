import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Filter1Component } from './filter1/filter1.component';
import { Filter2Component } from './filter2/filter2.component';


const routes: Routes = [
  {path:'filter1',component:Filter1Component},
  {path:'filter2',component:Filter2Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterRoutingModule { }
