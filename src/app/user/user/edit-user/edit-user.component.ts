import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from '../../user';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
})

export class EditUserComponent {
   @Input() user: User;
   @Output() updateUser = new EventEmitter<User>();
   @Output() cancelEdits = new EventEmitter<null>();

   update(user: User) {
      this.updateUser.emit(user);
   }
   cancel() {
      this.cancelEdits.emit();
   }
}
