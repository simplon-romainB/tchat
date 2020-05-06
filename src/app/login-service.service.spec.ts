
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginServiceService } from './login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from './models/user.model';
import { SERVER_API_URL } from './app.constants';

describe('LoginServiceService', () => {
  let service: LoginServiceService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  const dummyUser: User = {user: 'user',
                           password: 'password',
                           email: 'email',
                           isActivate: false,
                           authorities: 'member'};


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginServiceService]
    });
    injector = getTestBed();
    service = TestBed.inject(LoginServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  it('should login user account', () => {
    service.login(dummyUser).subscribe((v) => {});
    const req = httpMock.expectOne(SERVER_API_URL + '/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(dummyUser);
    req.flush(dummyUser);
  });

});
