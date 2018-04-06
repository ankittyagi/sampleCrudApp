import { Observable } from 'rxjs/Observable';
import { Injectable, OnInit } from '@angular/core';
import {User} from './user';
import {USER_PERSONS} from './user-data';
import { findIndex } from 'lodash';
import { ApiService } from '../core/services/api.service';

@Injectable()
export class UserService  {
//   private upersons = USER_PERSONS;
  constructor(private apiService: ApiService) {  }

  getUsersFromData(): Observable<any> {
   return this.apiService.Users.get();
  }

}
