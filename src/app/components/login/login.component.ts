import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  roles: string[] = [];
  loginForm!: FormGroup;
  isSubmitted = false;
  isLoggedIn = false;

  constructor(private TokenStorageService : TokenStorageService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
  }

  // onSubmit(): void {
  //   const { mail, password } = this.form;
  //
  //   this.authService.loginAuth(mail, password).subscribe({
  //     next: data => {
  //       this.storageService.saveUser(data);
  //
  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.roles = this.storageService.getUser().roles;
  //       this.reloadPage();
  //     },
  //     error: err => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   });
  // }

  get formControls() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  login() {
    console.log(this.loginForm.value['email'], this.loginForm.value['password'])
    this.authService

      .loginAuth(this.loginForm.value['email'], this.loginForm.value['password'])
      .subscribe({
        next: ok => {
          console.log("connected")
        },
        error: err => console.log(err)
      })
  }


    showRegisterForm()
    {
      this.router.navigate(['/register']);
    }
  }
