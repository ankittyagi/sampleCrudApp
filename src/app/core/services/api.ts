
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface IApiResponse {
   data: any;
}
@Injectable()
export class Api<T> {

   constructor(protected http: HttpClient, protected actionUrl: string) {
   }

   get(): Observable<IApiResponse> {
      return this.http.get<IApiResponse>(`${this.actionUrl}`);
   }
}
