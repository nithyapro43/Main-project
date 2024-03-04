import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterRoutingModule } from './filter-routing.module';
import { Filter1Component } from './filter1/filter1.component';
import { Filter2Component} from './filter2/filter2.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [Filter1Component,Filter2Component
    
  ],
  imports: [
    CommonModule,
    FilterRoutingModule,
    ButtonModule,
    TableModule,
    FormsModule,
    DialogModule
  ]
})
export class FilterModule { }
