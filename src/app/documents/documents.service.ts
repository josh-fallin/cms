import { Injectable, Output, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  @Output() documentSelectedEvent = new EventEmitter<Document>();
  documents: Document[] = [];

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocument(id: string) {
    this.documents.forEach(document => {
      if (document.id === id) {
        return document;
      }
    });
    return null;
  }

  getDocuments() {
    return this.documents.slice();
  }
  
}
