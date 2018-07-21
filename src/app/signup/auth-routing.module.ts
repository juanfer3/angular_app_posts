
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from '../servicios/auth.service';

import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';


const Rutas: Routes = [
    {
      path: 'login', component: LoginComponent,
    },
    {
      path: 'signup', component: SignupComponent,
    }

  ]

  @NgModule({
      imports: [RouterModule.forChild(Rutas)],
      exports: [RouterModule],
      providers: [AuthService]

  })

  export class AuthRoutingModule {

  }