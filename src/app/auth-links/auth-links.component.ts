
import { Component, OnInit } from '@angular/core';

/**Servicios */
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-auth-links',
  templateUrl: './auth-links.component.html',
  styleUrls: ['./auth-links.component.scss']
})
export class AuthLinksComponent implements OnInit {

  constructor(
    private Auth: AuthService
  ) { }

  isLoggedIn(): boolean {
    
    return this.Auth.isLoggedIn();
  }

  isLoggedOut(): boolean {
    return !this.Auth.isLoggedIn();
  }

  logOut() {
    this.Auth.logOut();
  }

  ngOnInit() {
  }

}
