import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message(1, 'greetings', 'why, hello there', 'sender'),
    new Message(2, 'question', 'i have a question about something', 'sender')
  ];

  constructor() {}
  ngOnInit() {}

  storeMessage(message: Message) {
    this.messages.push(message);
  }

}
