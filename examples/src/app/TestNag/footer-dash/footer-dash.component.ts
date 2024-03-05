import { Component, QueryList, ViewChildren } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-footer-dash',
  templateUrl: './footer-dash.component.html',
  styleUrl: './footer-dash.component.css'
})
export class FooterDashComponent {
  footers = [
    { footer_id: 1, name: 'Foot-1' },
    { footer_id: 2, name: 'Foot-2' },
    { footer_id: 3, name: 'Foot-3' }
  ];

  @ViewChildren(FooterComponent) footerComponents?: QueryList<FooterComponent>;

  constructor() {}

  addNameToFooter(footerId: number, name: string) {
    if (this.footerComponents) {
      const footerComponent = this.footerComponents.find(footer => footer.footerId === footerId);
      if (footerComponent) {
        footerComponent.addName(name);
      }

     var aa= this.getNamesForFooter(2);
     debugger
  }
 
}

getNamesForFooter(footerId: number): string[] {
  if (this.footerComponents) {
    const footerComponent = this.footerComponents.find(footer => footer.footerId === footerId);
    if (footerComponent) {
      return footerComponent.names;
    }
  }
  return []; // Return an empty array if footer with specified ID is not found or names array is not available
}



// getAllFooterData(): { footerId: number, names: string[] }[] {
//   const allFooterData = [];
//   this.footerComponents?.forEach(footerComponent => {
//     const footerId = footerComponent.footerId;
//     const names = footerComponent.names;
//     allFooterData.push({ footerId, names });
//   });
//   return allFooterData;
// }

}
