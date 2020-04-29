import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from '../app.constants';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class RegisterServiceService {
  constructor(private http: HttpClient) {}

  save(user: User): Observable<{}> {
    return this.http.post(SERVER_API_URL + '/register', user);
  }
}


