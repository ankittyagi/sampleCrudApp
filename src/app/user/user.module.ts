
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user.routing.module';
import { UsersListComponent } from './user/user-list/users-list.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
@NgModule({
   declarations: [
      UserComponent, UsersListComponent, EditUserComponent, AddUserComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  entryComponents: [UserComponent],
  providers: [UserService]
})
export class UserModule { }
