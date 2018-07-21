import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { Injectable } from '@angular/core';

/**Angular-token */
import { Angular2TokenService } from 'angular2-token';

/**Models */
import { Post } from '../models/Posts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redictUrl: string;

  constructor(
    private tokenService: Angular2TokenService,
    private router: Router
  ) { }

  logIn(email: string, password: string): Observable<Response> {
    return this.tokenService.signIn({
      email: email,
      password: password
    });
  }

  signUp(email: string, password: string): Observable<Response> {
    return this.tokenService.registerAccount ({
      email: email,
      password: password,
      passwordConfirmation: password
    });
  }

  logOut(): void {
    this.redictUrl = undefined;
    this.tokenService.signOut();
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.tokenService.userSignedIn();
  }

  redirectAfterLogin(): void {
    const redirecTo = this.redictUrl ? this.redictUrl: '/';
    this.redictUrl = undefined;
    this.router.navigate([redirecTo]);
  }


}
