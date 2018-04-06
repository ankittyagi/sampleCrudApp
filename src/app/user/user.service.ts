import { Observable } from 'rxjs/Observable';
import { Injectable, OnInit } from '@angular/core';
import { User } from './user';
import { ApiService } from '../core/services/api.service';

@Injectable()
export class UserService  {
  constructor(private apiService: ApiService) {  }

  getUsersFromData(): Observable<any> {
   return this.apiService.Users.get();
  }

}
