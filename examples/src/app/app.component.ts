import { Component } from '@angular/core';
import { MenuItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // customerSidebarVisible: boolean = false;
  // filterSidebarVisible: boolean = false;
  // optionssidebarVisible:boolean =false;
  // ordersidebarVisible:boolean=false;

  // toggleCustomerSidebar() {
  //   this.customerSidebarVisible = !this.customerSidebarVisible;
  // }

  // toggleFilterSidebar() {
  //   this.filterSidebarVisible = !this.filterSidebarVisible;
  // }

  // toggleoptionsSidebar() {
  //   this.optionssidebarVisible = !this.optionssidebarVisible;
  // }

  // toggleordersSidebar() {
  //   this.ordersidebarVisible = !this.ordersidebarVisible;
  // }
 

  items: MenuItem[]=[];
  
  
  
  ngOnInit() {
      this.items = [
          {
              label: 'CUSTOMER',
              items: [
                  {
                      label: 'Customers',
                      icon: 'pi pi-circle',
                      routerLink: "customer/customer1"
                  },
                  {
                      label: 'Add or Edit',
                      icon: 'pi pi-circle',
                      routerLink: "customer/customer2"
                  }
              ]
          },
          {
            label: 'FILTER',
            items: [
                {
                    label: 'filter1',
                    icon: 'pi pi-circle',
                    routerLink: "filter/filter1"
                },
                {
                    label: 'filter2',
                    icon: 'pi pi-circle',
                    routerLink: "filter/filter2"
                }
            ]
        },
        {
          label: 'OPTIONS',
          items: [
              {
                  label: 'options1',
                  icon: 'pi pi-circle',
                  routerLink: "options/options1"
              },
              {
                  label: 'options2',
                  icon: 'pi pi-circle',
                  routerLink: "options/options2"
              }
          ]
      },
      {
        label: 'ORDER',
        items: [
            {
                label: 'order1',
                icon: 'pi pi-circle',
                routerLink: "order/order1"
            },
            {
                label: 'order2',
                icon: 'pi pi-circle',
                routerLink: "order/order2"
            }
        ]
    }
        ]
    }
       





}
