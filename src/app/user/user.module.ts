import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user.routing.module';
@NgModule({
   declarations: [
      UserComponent,
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
