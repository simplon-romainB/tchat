import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../route-animations';
import { AbstractControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { User } from '../models/user.model';
import { LoginServiceService} from '../login-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  animations: [ slideInAnimation ]
})
export class LoginComponent  {

  constructor(private fb: FormBuilder,
              private user: User,
              public loginService: LoginServiceService ) { }

  loginForm = this.fb.group({
    user: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[_.@A-Za-z0-9-]*$')]],
    // tslint:disable-next-line: max-line-length
    password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)]]
  });

  login() {
    this.user.password = this.loginForm.get('password').value;
    this.user.user = this.loginForm.get('user').value;
    this.loginService.login(this.user).subscribe((v) => console.log(v));
  }
}

