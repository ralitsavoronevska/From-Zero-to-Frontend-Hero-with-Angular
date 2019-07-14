import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users = [
    { username: "Martin", age: 25},
    { username: "Ivan", age: 50},
    { username: "Peter", age: 35}
  ]

  constructor() { }

  ngOnInit() {
  }

}
