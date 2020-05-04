import { TestBed } from '@angular/core/testing';

import { LoginServiceService } from './login-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('LoginServiceService', () => {
  let service: LoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServiceService);
  });


});
