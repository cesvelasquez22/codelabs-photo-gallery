import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-and-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-and-chat.component.html',
  styleUrls: ['./feedback-and-chat.component.scss']
})
export class FeedbackAndChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
