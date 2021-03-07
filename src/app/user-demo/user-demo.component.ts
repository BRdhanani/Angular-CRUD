import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent implements OnInit {
  @Input() title
  @Output() getTitle: EventEmitter<string>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.getTitle.emit('hello world')
  }

}
