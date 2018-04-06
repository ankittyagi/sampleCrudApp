import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

@NgModule({
   declarations: [
      UserComponent
    ],
  imports: [
    CommonModule,
    FormsModule
  ],
  entryComponents: [UserComponent],
  providers: [UserService]
})
export class UserModule { }
