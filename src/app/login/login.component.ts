import { AuthService } from './../servicios/auth.service';
import { Component, OnInit, Attribute } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean;
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuild: FormBuilder
  ) { }

  ngOnInit() {}
  /*
  ngOnInit() {

    this.submitted = false;
    this.loginForm = this.formBuild.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(value: any) {
    this.submitted = true;
    if (!this.loginForm.valid) {
      return;
    }
    this.auth.logIn(value.email, value.password).subscribe(
      this.auth.redirectAfterLogin.bind(this.auth),
      this.afterFailedLogin.bind(this);
    )

  }

  afterFailedLogin(errors: any) {
    const parsed_errors = JSON.parse(errors._body).errors;
    for (let attribute in this.loginForm.controls) {
      if (parsed_errors[attribute]) {
        this.loginForm.controls[attribute].setErrors(parsed_errors[attribute]);
      }
    }
    
    this.loginForm.setErrors(parsed_errors);
  }
  */

}
