import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
import {clone} from 'lodash';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  users: User[];
  userForm: Boolean = false;
  isNewUser: Boolean;
  newUser: any = {};
  editUserForm: Boolean = false;
  editedUser: any = {};
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
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.userForm = false;
    this.editedUser = clone(user);
  }

  showAddUserForm() {
    if (this.users.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.editUserForm = false;
    this.isNewUser = true;
  }

  saveUser(user: User) {
    if (this.isNewUser) {
      this.addUser(user);
    }
    this.userForm = false;
  }

  updateUser(editedUser: User) {
    const index = this.users.findIndex((u: User) => {
      return u.id === editedUser.id;
   });
   this.users[index] = editedUser;
    this.editUserForm = false;
    this.editedUser = {};
  }

  removeUser(user: User) {
    this.deleteUser(user);
  }

  cancelEdits() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
  }

  searchUser(value: string) {
   this.users = this.findUsers(value);
  }
  findUsers(value: string) {
      if (value) {
         const r =  this.users.filter((u: User) => {
            return u.name.toLowerCase().indexOf(value) >= 0;
         });
         return r;
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
