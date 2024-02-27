import { Component } from '@angular/core';
import { MenuItem } from './menuitem.model';
import { MessageService } from 'primeng/api';




@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrl: './menuitem.component.css',
  providers: [MessageService]
})
export class MenuitemComponent {
//   items: MenuItem[] | undefined;

//   ngOnInit() {
      
//         this.items = [
//           {
//               label: 'New',
//               icon: 'pi pi-fw pi-plus',
//           },
//           {
//               label: 'Delete',
//               icon: 'pi pi-fw pi-trash'
//           }
//       ];
//   }
//   }


  items: MenuItem[] | undefined;

  constructor(private messageService: MessageService) {}
  
  ngOnInit() {
      this.items = [
          {
              label: 'Options',
              items: [
                  {
                      label: 'Update',
                      icon: 'pi pi-refresh',
                      command: () => {
                          this.update();
                      }
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-times',
                      command: () => {
                          this.delete();
                      }
                  }
              ]
          },
          {
              label: 'Navigate',
              items: [
                  {
                      label: 'Angular',
                      icon: 'pi pi-external-link',
                      url: 'http://angular.io'
                  },
                  {
                      label: 'Router',
                      icon: 'pi pi-upload',
                      command: () => {
                        this.router();}
                  }
              ]
          },
          {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Left',
                                icon: 'pi pi-fw pi-align-left'
                            },
                            {
                                label: 'Right',
                                icon: 'pi pi-fw pi-align-right'
                            },
                            {
                                label: 'Center',
                                icon: 'pi pi-fw pi-align-center'
                            },
                            {
                                label: 'Justify',
                                icon: 'pi pi-fw pi-align-justify'
                            }
                        ]
                    },
                    {
                                    label: 'Users',
                                    icon: 'pi pi-fw pi-user',
                                    items: [
                                        {
                                            label: 'New',
                                            icon: 'pi pi-fw pi-user-plus'
                                        },
                                        {
                                            label: 'Delete',
                                            icon: 'pi pi-fw pi-user-minus'
                                        },
                                        {
                                            label: 'Search',
                                            icon: 'pi pi-fw pi-users',
                                            items: [
                                                {
                                                    label: 'Filter',
                                                    icon: 'pi pi-fw pi-filter',
                                                    items: [
                                                        {
                                                            label: 'Print',
                                                            icon: 'pi pi-fw pi-print'
                                                        }
                                                    ]
                                                },
                                                {
                                                    icon: 'pi pi-fw pi-bars',
                                                    label: 'List'
                                                }
                                            ]
                                        }
                                    ]
                                },
      ];
  }

  update() {
    //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
      alert('Updated');
  }

  delete() {
    //   this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
      alert('Data deleted')
  }

  router() {
   
   alert('Router clicked');
  }
}

// items: MenuItem[] | undefined;

// ngOnInit() {
//     this.items = [
//         {
//             label: 'File',
//             icon: 'pi pi-fw pi-file',
//             items: [
//                 {
//                     label: 'New',
//                     icon: 'pi pi-fw pi-plus',
//                     items: [
//                         {
//                             label: 'Bookmark',
//                             icon: 'pi pi-fw pi-bookmark'
//                         },
//                         {
//                             label: 'Video',
//                             icon: 'pi pi-fw pi-video'
//                         }
//                     ]
//                 },
//                 {
//                     label: 'Delete',
//                     icon: 'pi pi-fw pi-trash'
//                 },
//                 {
//                     label: 'Export',
//                     icon: 'pi pi-fw pi-external-link'
//                 }
//             ]
//         },
//         {
//             label: 'Edit',
//             icon: 'pi pi-fw pi-pencil',
//             items: [
//                 {
//                     label: 'Left',
//                     icon: 'pi pi-fw pi-align-left'
//                 },
//                 {
//                     label: 'Right',
//                     icon: 'pi pi-fw pi-align-right'
//                 },
//                 {
//                     label: 'Center',
//                     icon: 'pi pi-fw pi-align-center'
//                 },
//                 {
//                     label: 'Justify',
//                     icon: 'pi pi-fw pi-align-justify'
//                 }
//             ]
//         },
//         {
//             label: 'Users',
//             icon: 'pi pi-fw pi-user',
//             items: [
//                 {
//                     label: 'New',
//                     icon: 'pi pi-fw pi-user-plus'
//                 },
//                 {
//                     label: 'Delete',
//                     icon: 'pi pi-fw pi-user-minus'
//                 },
//                 {
//                     label: 'Search',
//                     icon: 'pi pi-fw pi-users',
//                     items: [
//                         {
//                             label: 'Filter',
//                             icon: 'pi pi-fw pi-filter',
//                             items: [
//                                 {
//                                     label: 'Print',
//                                     icon: 'pi pi-fw pi-print'
//                                 }
//                             ]
//                         },
//                         {
//                             icon: 'pi pi-fw pi-bars',
//                             label: 'List'
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             label: 'Events',
//             icon: 'pi pi-fw pi-calendar',
//             items: [
//                 {
//                     label: 'Edit',
//                     icon: 'pi pi-fw pi-pencil',
//                     items: [
//                         {
//                             label: 'Save',
//                             icon: 'pi pi-fw pi-calendar-plus'
//                         },
//                         {
//                             label: 'Delete',
//                             icon: 'pi pi-fw pi-calendar-minus'
//                         }
//                     ]
//                 },
//                 {
//                     label: 'Archieve',
//                     icon: 'pi pi-fw pi-calendar-times',
//                     items: [
//                         {
//                             label: 'Remove',
//                             icon: 'pi pi-fw pi-calendar-minus'
//                         }
//                     ]
//                 }
//             ]
//         }
//     ];
// }
// }
