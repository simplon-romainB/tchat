import { TestBed, getTestBed  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RegisterServiceService } from './register-service.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from './models/user.model';
import { SERVER_API_URL } from './app.constants';

describe('RegisterServiceService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: RegisterServiceService;
  const dummyUser: User = {user: 'user',
                           password: 'password',
                           email: 'test@test.com',
                           isActivate: false,
                           authorities: 'member'}

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule],
    providers: [RegisterServiceService]});
    injector = getTestBed();
    service = TestBed.inject(RegisterServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should register new account', () => {
    service.save(dummyUser).subscribe((v) => {});
    const req = httpMock.expectOne(SERVER_API_URL + '/register');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(dummyUser);
    req.flush(dummyUser);
  });
});
