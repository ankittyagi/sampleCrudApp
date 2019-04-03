import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from '../../user';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})

export class UsersListComponent implements OnInit {
   @Input() users: User[];
   @Output() showEditUserForm = new EventEmitter<User>();
   @Output() removeUser = new EventEmitter<null>();

   ngOnInit() {

   }

   showEditUser(user: User) {
      this.showEditUserForm.emit(user);
   }
   deleteUser() {
      this.removeUser.emit();
   }
}
