import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private tokenService: Angular2TokenService) {
    this.tokenService.init({
      // registerAccountPath: 'https://api-rails-juanfer3.c9users.io/auth'
      registerAccountPath: 'http://localhost:3000/auth'
    });	
    }
  
    ngOnInit() {
    }
    
    signUp() {
     this.tokenService.registerAccount({
      email:                'admin@gmail.com.co',
      password:             'Admin123456',
      passwordConfirmation: 'Admin123456'
      }).subscribe(
         res =>      console.log(res),
         error =>    console.log(error)
      );
   }

}
