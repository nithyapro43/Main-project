import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  @Input() footerId: number | undefined;
  names: string[] = [];

  constructor() {}

  addName(name: string) {
    this.names.push(name);
    debugger;
  }

}
