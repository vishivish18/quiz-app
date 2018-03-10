import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup ;
  constructor(private _formBuilder: FormBuilder) { }


  roles = [
          {
            id : 1 ,
            value : 'Presentor'},
            {
            id : 2 ,
            value : 'participant'}];

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      userName : ['' , ],
      password : ['' , ],
      confirmPassword : ['', ],
      emailAddress : ['', ],
      cgiCode : ['' , ],
      role : ['', ]
    });
  }

  submit(loginForm) {
    const loginData = {
      userName : this.loginForm.controls.userName.value as string ,
      emailAddress : this.loginForm.controls.emailAddress.value as string ,
      cgiCode : this.loginForm.controls.cgiCode.value as string,
      role : this.loginForm.controls.role.value as string,
      password : this.loginForm.controls.password.value as string ,
      confirmPassword : this.loginForm.controls.confirmPassword.value as string
    };
    console.log('username :' + loginData.userName  +
                '   emailAddress: ' + loginData.emailAddress +
                '   cgiCode: '  + loginData.cgiCode +
                '   role: ' + loginData.role +
                '   password :' + loginData.password  +
                '   confirm password :' + loginData.confirmPassword
                 );

  }

}
