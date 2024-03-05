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
import { OrderModule } from './order/order.module';
import { InputTextModule } from 'primeng/inputtext';
import { FooterDashComponent } from './TestNag/footer-dash/footer-dash.component';
import { FooterComponent } from './TestNag/footer/footer.component';

import { TreeTableComponent } from './TestNag/tree-table/tree-table.component';
import { TreeTableModule } from 'primeng/treetable';
import { NagService } from './TestNag/tree-table/nag-service';


@NgModule({
  declarations: [
    AppComponent,
    FooterDashComponent,
    FooterComponent,
    TreeTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MenuModule,BrowserAnimationsModule,ToastModule,PanelMenuModule,
    SidebarModule,CustomerModule,ButtonModule,TableModule,DialogModule,OrderModule,InputTextModule
    ,TreeTableModule
  ],
  exports:[],
  providers: [
NagService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
