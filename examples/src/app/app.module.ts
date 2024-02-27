import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    MenuitemComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MenuModule,BrowserAnimationsModule,ToastModule,PanelMenuModule,
    SidebarModule,ButtonModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
