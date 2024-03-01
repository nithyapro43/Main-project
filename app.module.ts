import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CustomerModule } from './customer/customer.module';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MenuModule,BrowserAnimationsModule,ToastModule,PanelMenuModule,
    SidebarModule,CustomerModule,ButtonModule,TableModule,DialogModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
