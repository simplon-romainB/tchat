import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from './app.constants';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  login(user: User): Observable<{}> {
    return this.http.post(SERVER_API_URL + '/login', user);
  }

  constructor(private http: HttpClient) { }
}
