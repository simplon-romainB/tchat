import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';

import {User} from '../models/user.model';
import {RegisterServiceService} from '../register-service.service';
import { AccountVerifService} from '../account-verif.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.styl']
})
export class RegisterComponent  {
  missMatch = false;

  constructor(private fb: FormBuilder,
              private user: User,
              public registerService: RegisterServiceService,
              private verif: AccountVerifService)
               { }



  registerForm = this.fb.group({
    user: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[_.@A-Za-z0-9-]*$')]],
    email: ['', [Validators.required, , Validators.email]],
    // tslint:disable-next-line: max-line-length
    password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)]]
  });

  register() {
    if (this.registerForm.get('password').value !== this.registerForm.get('confirmPassword').value) {
        this.missMatch = true;
        return this.missMatch;
      }
      else  {
        this.missMatch = false;
        this.user.password = this.registerForm.get('password').value;
        this.user.user  = this.registerForm.get('user').value;
        this.user.email = this.registerForm.get('email').value;
        this.user.isActivate = false;
        this.registerService.save(this.user).subscribe(
          (v) => {(console.log(v))},
          //this.verif.verifAccount(this.user).subscribe((res) => console.log(res))},
          response => this.processError(response)
        );
      }
  }

  processError(response) {
    alert("erreur lors de l'enregistrement veuillez éssayer ultérieurement")
    console.log(response);
  }



}
