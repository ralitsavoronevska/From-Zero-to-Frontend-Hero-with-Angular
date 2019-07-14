import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent implements OnInit {
  private newUsers = [
    { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', active: true, website: 'hildegard.org' },
    { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', active: true, website: 'anastasia.net' },
    { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', active: false, website: 'ramiro.info' },
    { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', active: true, website: 'kale.biz' }
  ]

  @Output() emittSelectUser = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  
  selectUser(user) {
    this.emittSelectUser.emit(user);
  }
}
