import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpInterceptor} from "@angular/common/http";
import {HttpRequestInterceptor} from "../../services/http.interceptor";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  form: any = {
    username: null,
    password: null
  };


  roles: string[] = [];
  loginForm!: FormGroup;
  isSubmitted = false;

  errorMessage = '';
  isLoginFailed = false;
  isLoggedIn = false;

  forgotPasswordForm!: FormGroup;


  constructor(private fb: FormBuilder , private TokenStorageService : TokenStorageService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.createForm();
  }


  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // rememberMe() {
  //   const username = this.loginForm.get('username')?.value;
  //   const password = this.loginForm.get('password')?.value;
  //   localStorage.setItem('username', username);
  //   localStorage.setItem('password', password);
  // }


  onSubmit(): void {
    const { username, password } = this.user;

    this.authService.loginAuth(username, password).subscribe({
      next: data => {
        this.TokenStorageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.TokenStorageService.getUser().roles;
        this.reloadPage()
      },
      error: err => {console.log(err)
        //
        // this.errorMessage = err.error.message;
        // this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

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
        next: data => {
          console.log("Vous etes connecté")
          this.TokenStorageService.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.TokenStorageService.getUser().roles;
          // this.reloadPage()
          this.router.navigate(['/page-accueil'])
        },
        error: err => console.log(err)
      })

  }

  showRegisterForm()
  {
    this.router.navigate(['/register']);
  }


  redirectionPageAccueil(){
    this.router.navigate(['/page-accueil'])
  }
}
