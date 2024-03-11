import { Component, OnInit } from '@angular/core';
import { NodeService } from './nodeService';
import { TreeNode } from 'primeng/api';



// import { SelectItemGroup } from 'primeng/api';

// interface City {
//   name: string,
//   code: string
// }


@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css'
})
export class MultiSelectComponent implements OnInit {


// groupedCities!: SelectItemGroup[];
// selectedCities!: City[];


//   constructor() {
//     this.groupedCities = [
//       {
//         label: 'Andhra Pradesh',
//         value: 'AP',
//         items: [
//           { label: 'Proddatur', value: 'Proddatur' },
//           { label: 'Kadapa', value: 'Kadapa' },
//           { label: 'Kurnool', value: 'Kurnool' },
          
//         ]
//       },
//       {
//         label: 'USA',
//         value: 'us',
//         items: [
//           { label: 'Chicago', value: 'Chicago' },
//           { label: 'Los Angeles', value: 'Los Angeles' },
//           { label: 'New York', value: 'New York' },
//           { label: 'San Francisco', value: 'San Francisco' }
//         ]
//       },
//       {
//         label: 'Japan',
//         value: 'jp',
//         items: [
//           { label: 'Kyoto', value: 'Kyoto' },
//           { label: 'Osaka', value: 'Osaka' },
//           { label: 'Tokyo', value: 'Tokyo' },
//           { label: 'Yokohama', value: 'Yokohama' }
//         ]
//       }
//     ];
//   }

files: TreeNode[]=[];

selectedFiles: TreeNode[]=[];
  showTree= false;

constructor(private nodeService: NodeService) {}

ngOnInit() {
    this.nodeService.getFiles().then((data) => (this.files = data));
}

onDropdownChange(event: any) {
  this.showTree = true;
}
onNodeSelect(event: any) {
  const selectedNode: TreeNode = event.node;
}

onNodeUnselect(event: any) {
  const unselectedNode: TreeNode = event.node;
 
}





}