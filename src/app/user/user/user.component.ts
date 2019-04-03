import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {clone} from 'lodash';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  users: User[];
  isNewUser: Boolean;
  newUser: User;
  editedUser: User;
  addUserForm: Boolean = false;
  editUserForm: Boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsersFromData().subscribe((response: any) => {
      this.users = response.data;
   }, (error) => {
      console.log('some error occured');
   });
  }

  showEditUserForm(user: User) {
    if (!user) {
      this.addUserForm = false;
      return;
    }
    this.editUserForm = true;
    this.addUserForm = false;
    this.editedUser = clone(user);
  }

  showAddUserForm() {
    if (this.users.length) {
      this.newUser = {
         id: this.users.length + 1,
         name: null
         };
    }
    this.addUserForm = true;
    this.editUserForm = false;
    this.isNewUser = true;
  }

  saveUser(user: User) {
    if (this.isNewUser) {
      this.addUser(user);
    }
    this.addUserForm = false;
  }

  updateUser(editedUser: User) {
    const index = this.users.findIndex((u: User) => {
      return u.id === editedUser.id;
   });
   this.users[index] = editedUser;
    this.editUserForm = false;
    this.editedUser = null;
  }

  removeUser(user: User) {
    this.deleteUser(user);
  }

  cancelEdits() {
    this.editedUser = null;
    this.editUserForm = false;
  }

  cancelNewUser() {
    this.newUser = null;
    this.addUserForm = false;
  }

  searchUser(value: string) {
   this.users = this.findUsers(value);
  }

  findUsers(value: string) {
      if (value) {
         return this.users.filter((u: User) => {
            return u.name.toLowerCase().indexOf(value) >= 0;
         });
      } else {
         this.getUsers();
      }
   }

   addUser(user: User) {
      this.users.push(user);
   }

   deleteUser(user: User) {
      this.users.splice(this.users.indexOf(user), 1);
   }
}
