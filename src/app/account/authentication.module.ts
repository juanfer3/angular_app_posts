import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [
      // LoginComponent,
      // SignUpComponent
    ],
    imports: [
      FormsModule, 
      ReactiveFormsModule,
      // AuthRoutingModule,
      CommonModule
    ],
    providers: [
      
    ]
  })

  export class AuthenticationModule { }