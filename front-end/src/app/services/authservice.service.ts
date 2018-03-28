import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
    constructor(private http: Http, private _router: Router) {
    }

    login(credentials) {
        this.http.post('http://188.166.214.9:1830/quizapp/api/user/session', credentials).
        subscribe((response) => {
            console.log(response);
            console.log(credentials);
            console.log('Hello.Session Api working');
            console.log(response.json());
            localStorage.setItem('tokenfordetails', response.json());
            const headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('x-auth', localStorage.getItem('tokenfordetails'));

            const options = new RequestOptions({headers: headers});

            this.http.get('http://188.166.214.9:1830/quizapp/api/user/signin', options).
            subscribe((res) => {
                console.log(res.json());
                console.log('sign-in api working');
                this._router.navigate(['/managequiz']);
            });
            } , error => {
      console.log('Invalid Credentials');
      alert('Invalid Credentials');
    });
        }
    logout() {
        localStorage.removeItem('tokenfordetails');
        console.log('logged out successfully!');
    }


    isLoggedIn() {
        // return tokenNotExpired();

    }

    registration(userData) {
        this.http.post('http://188.166.214.9:1830/quizapp/api/user/signup', userData).
        subscribe((request) => {
            console.log(request);
            console.log(userData);
            alert('REGISTRATION SUCCESSFUL');
            // this.Response = request;
            // this.sampleResponse = request;
            this._router.navigate(['/sample']);
        });
    }
}
