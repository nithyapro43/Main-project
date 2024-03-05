import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsRoutingModule } from './options-routing.module';
import { Options1Component } from './options1/options1.component';
import { Options2Component } from './options2/options2.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [Options1Component,Options2Component
   
  ],
  imports: [
    CommonModule,
    OptionsRoutingModule,
    ButtonModule,
    TableModule,
    FormsModule,
    DialogModule
  ]
})
export class OptionsModule { }
