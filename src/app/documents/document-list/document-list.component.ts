import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentFire = new EventEmitter<Document>();

  documents: Document[] = [
    new Document(1, 'doc1', 'this is doc1', 'doc1url', null),
    new Document(2, 'doc2', 'this is doc2', 'doc2url', null),
    new Document(3, 'doc3', 'this is doc3', 'doc3url', null),
    new Document(4, 'doc4', 'this is doc4', 'doc4url', null),
    new Document(5, 'doc5', 'this is doc5', 'doc5url', null)
  ];

  constructor() {}
  ngOnInit() {}

  onSelectedDocument(document: Document) {
    this.selectedDocumentFire.emit(document);
  }

}
