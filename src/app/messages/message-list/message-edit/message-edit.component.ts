import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Message } from '../../message.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subjectInput') subjectRef: ElementRef;
  @ViewChild('messageInput') msgTextRef: ElementRef;
  @Output() messageSent = new EventEmitter<Message>();

  constructor() {}
  ngOnInit() {}

  onSendMessage() {
    const sub = this.subjectRef.nativeElement.value;
    const msg = this.msgTextRef.nativeElement.value;
    const newMessage = new Message(1, sub, msg, 'sender');
    this.messageSent.emit(newMessage);
  }

  onClear() {
    this.subjectRef.nativeElement.value = '';
    this.msgTextRef.nativeElement.value = '';
  }

}
