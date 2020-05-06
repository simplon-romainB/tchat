import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from './app.constants';
import { User } from './models/user.model';

@Injectable({ providedIn: 'root' })
export class AccountVerifService {
  constructor(private http: HttpClient) {}

  verifAccount(user: User) {
    return this.http.post(SERVER_API_URL + '/accountactivation', user).subscribe((v) => {console.log(v)});
  }
}
