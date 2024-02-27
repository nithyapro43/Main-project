import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceWrapper {

  constructor(private messageService: MessageService) { }

  addSuccessMessage(summary: string, detail: string) {
    this.messageService.add({ severity: 'success', summary: summary, detail: detail });
  }

  addWarnMessage(summary: string, detail: string) {
    this.messageService.add({ severity: 'warn', summary: summary, detail: detail });
  }
}