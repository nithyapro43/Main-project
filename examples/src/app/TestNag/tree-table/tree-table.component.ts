import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NagService } from './nag-service';


@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrl: './tree-table.component.css'
})
export class TreeTableComponent {
  files!: TreeNode[];

    constructor(private nodeService: NagService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
    }

    toggleRow(rowData: any) {
      rowData.disabled = !rowData.disabled;
    }
}
