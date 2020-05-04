import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AbstractControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { RegisterComponent } from './register.component';
import { RegisterServiceService } from '../register-service.service'
import { User } from '../models/user.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';



describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: RegisterServiceService;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [FormBuilder,
        User,
        HttpClient,
        RegisterServiceService],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check password confirm ok', () => {
    component.registerForm.get('password').setValue('miss');
    component.registerForm.get('confirmPassword').setValue('match');
    component.register();
    expect(component.missMatch).toBe(true);
  });

  it('should call save with User arguments', inject(
    [RegisterServiceService], () => {
      fakeAsync((service: RegisterServiceService) => {
        spyOn(service, 'save').and.returnValue(of({}));
        component.registerForm.patchValue({
          password: 'password',
          confirmPassword: 'password'
        });
        component.register();
        tick();
        expect(service.save).toHaveBeenCalledWith({
          user: 'user',
          password: 'password',
          email: 'test@test.com',
          isActivate: false,
          authorities: 'member'
        });
      });
    }));
});


