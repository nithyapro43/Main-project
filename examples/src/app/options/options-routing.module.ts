import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Options1Component } from './options1/options1.component';
import { Options2Component } from './options2/options2.component';

const routes: Routes = [
  {path:'options1',component:Options1Component},
  {path:'options2',component:Options2Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule { }
