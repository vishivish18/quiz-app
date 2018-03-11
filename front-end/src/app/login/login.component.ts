import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {CheckEmailValidators} from './checkemail.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

 loginform=new FormGroup({
  emailAddress:new FormControl('',
    [
    Validators.required,
    CheckEmailValidators.onlycygrpallowed
   
    ]),

  password:new FormControl('',
  [
  Validators.required,
  // Validators.minLength(7),
  // Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@$?!_])[a-zA-Z0-9#@$?!_]+$/)

  ]),

  
});

get password()
{
  return this.loginform.get('password');
}


get emailAddress()
{
  return this.loginform.get('emailAddress');
}
ngOnInit() {
  }
  submit(loginform) {
    const loginData = {
      
      emailAddress : this.loginform.controls.emailAddress.value as string ,
      password : this.loginform.controls.password.value as string ,
      
    };
    console.log(
                '   emailAddress: ' + loginData.emailAddress +
                '   password :' + loginData.password
                
                 );

  }

}





















