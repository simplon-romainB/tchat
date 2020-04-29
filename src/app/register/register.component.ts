import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';

import {User} from '../models/user.model'
import {RegisterServiceService} from './register-service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.styl']
})
export class RegisterComponent  {

  constructor(private fb: FormBuilder, private user: User, private registerService: RegisterServiceService) { }

  registerForm = this.fb.group({
    user: ['', [Validators.required, Validators.minLength(1), Validators.pattern('^[_.@A-Za-z0-9-]*$')]],
    email: ['', [Validators.required, , Validators.email]],
    // tslint:disable-next-line: max-line-length
    password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)]]
  });

  register() {
    let missMatch = false;
    if (this.registerForm.get('password').value !== this.registerForm.get('confirmPassword').value) {
        missMatch = true;
      }
      else if (missMatch === false) {
        this.user.password = this.registerForm.get('password').value;
        this.user.user  = this.registerForm.get('user').value;
        this.user.email = this.registerForm.get('email').value;
        this.registerService.save(this.user).subscribe(
          (v) => (console.log(v)),
          response => this.processError(response)
        );
      }
  }

  processError(response) {
    alert("erreur lors de l'enregistrement veuillez éssayer ultérieurement")
    console.log(response);
  }

  passMatch(form: AbstractControl) {
    if ((form.get('password') == null) || (form.get('confirmPassword') == null)) {
      return {valid: false};
    }
    else if (form.get('password').value !== form.get('confirmPassword').value) {
      return {valid: false};
    }
  }

}
