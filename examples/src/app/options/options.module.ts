import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsRoutingModule } from './options-routing.module';
import { Options1Component } from './options1/options1.component';
import { Options2Component } from './options2/options2.component';


@NgModule({
  declarations: [Options1Component,Options2Component
   
  ],
  imports: [
    CommonModule,
    OptionsRoutingModule
  ]
})
export class OptionsModule { }
