import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AbstractControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';
import { LoginServiceService } from '../login-service.service';
import { User } from '../models/user.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let service: LoginServiceService;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [FormBuilder,
        User,
        HttpClient,
        LoginServiceService],
      imports: [HttpClientModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should call login with User arguments', () => {
    fakeAsync((service: LoginServiceService) => {
    spyOn(service, 'login').and.returnValue(of({}));
    component.login()
    expect(service.login).toHaveBeenCalled();
    });
  });


});
