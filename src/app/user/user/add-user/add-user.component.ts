import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from '../../user';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
})

export class AddUserComponent {
   @Input() user: User;
   @Output() saveUser = new EventEmitter<User>();
   @Output() cancelNewUser = new EventEmitter<null>();

   save(user: User) {
      this.saveUser.emit(user);
   }
   cancel() {
      this.cancelNewUser.emit();
   }
}
