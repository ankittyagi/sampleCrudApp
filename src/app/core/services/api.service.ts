import { HttpClient } from '@angular/common/http';
import { Api } from './api';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../../user/user';
@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }
  apiUrl = environment.apiUrl;
  Users = new Api<User>(this.http, this.apiUrl + 'assets/data.json');
}
