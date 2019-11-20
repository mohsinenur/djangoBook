import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ApiService } from "../_service/api.service";
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


interface TokenObj {
  token: string
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

  registerTrue = false;

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    const mrToken = this.cookieService.get('mr-token');
    if(mrToken){
      this.router.navigate(['movies']);
    }
  }

  saveForm(){
    if(!this.registerTrue){
      this.login();
    }else{
      this.apiService.registerUser(this.loginForm.value).subscribe(
        result => {
          this.login();
        },
        error => console.log(error)
      );
    }
  }

  login() {
    this.apiService.loginUser(this.loginForm.value).subscribe(
      (result: TokenObj) => {
        this.cookieService.set('mr-token', result.token);
        this.router.navigate(['movies']);
      },
      error => console.log(error)
    );
  }

}
