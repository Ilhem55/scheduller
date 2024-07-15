import { AuthenticationRequest } from './../../services/models/authentication-request';
import { AuthenticationService } from './../../services/services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

constructor(
  private router: Router,
  private authService: AuthenticationService,
  private tokenService: TokenService
) {
}


login() {
  this.errorMsg = [];
  console.log('Auth request:', this.authRequest); // Log the auth request
  
  this.authService.authenticate({ body: this.authRequest }).subscribe({
    next: (res) => {
      console.log('Auth response:', res); // Log the auth response
      this.tokenService.token = res.token as string;
      this.router.navigate(['books']);
    },
    error: (err) => {
      console.error('Auth error:', err); // Log the error response
      if (err.status === 401) {
        console.log("errrrrror");
        this.errorMsg.push('Authentication failed. Please check your credentials.');
      } else if (err.error?.validationErrors) {
        this.errorMsg = err.error.validationErrors;
      } else {
        this.errorMsg.push(err.error?.errorMsg || 'An unknown error occurred.');
      }
    }
  });
}




  register(){
    this.router.navigate(['register'])

  }

}
