import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../servicios/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  submitted: boolean;
  signUpForm: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuild: FormBuilder
  ) { }
  ngOnInit() {}
  /*
  ngOnInit() {
    this.submitted = false;
    this.signUpForm = this.formBuild.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(value: any) {
    this.submitted = true;
    if (!this.signUpForm.valid) {
      return;
    }
    this.auth.signUp(value.email, value.password).subscribe(
      this.auth.redirectAfterLogin.bind(this.auth),
      this.afterFailedSignUp.bind(this);
    )

  }

  afterFailedSignUp(errors: any) {
    const parsed_errors = JSON.parse(errors._body).errors;
    for (let attribute in this.signUpForm.controls) {
      if (parsed_errors[attribute]) {
        this.signUpForm.controls[attribute].setErrors(parsed_errors[attribute]);
      }
    }
    
    this.signUpForm.setErrors(parsed_errors);
  }
  */
}
