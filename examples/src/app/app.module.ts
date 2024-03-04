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
import { OrderModule } from './order/order.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MenuModule,BrowserAnimationsModule,ToastModule,PanelMenuModule,
    SidebarModule,ButtonModule,OrderModule,TableModule,InputTextModule
   
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
