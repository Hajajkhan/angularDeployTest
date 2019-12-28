import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Hero, Hajaj } from '../hero';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
hj : Hajaj;
  constructor() { }

  ngOnInit() {
    this.hj= new Hajaj(); 
    this.hj = 
    {
      age: 0,
      name: 'Hajaj Khan'
    };

  }

}
