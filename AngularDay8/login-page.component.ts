import { Component, OnInit } from '@angular/core';
import { AuthtokenService } from '../authtoken.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  uid: string = 'admin@gmail.com';
  pwd: string = 'admin123';
  result: string = '';

  constructor(private authServices: AuthtokenService) {}

  public login_click(): void {
    this.authServices.getTokenForValidUser(this.uid, this.pwd).subscribe({
      next: (resData: any) => {
        this.result = 'Valid User.  Access Token :  ' + resData.accessToken;
        sessionStorage.setItem('AUTH_TOKEN', resData.accessToken);
        console.log(resData.accessToken);
      },
      error: (error: any) => {
        this.result =
          'Invalid user id or password. Error Message : ' + error.message;
        console.log(error);
      },
    });
  }
}
