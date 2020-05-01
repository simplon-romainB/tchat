import { TestBed } from '@angular/core/testing';

import { RegisterServiceService } from './register-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('RegisterServiceService', () => {
  let service: RegisterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
