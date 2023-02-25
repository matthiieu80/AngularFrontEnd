import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';


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
  errorMessage = '';

  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cookieService: CookieService
  ) {}

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
    console.log(this.loginForm.value['email'], this.loginForm.value['password']);
    this.authService.loginAuth(this.loginForm.value['email'], this.loginForm.value['password']).subscribe({
      next: ok => {
        this.tokenStorageService.saveToken(ok.token);
        this.cookieService.set('authToken', ok.token); // définit le token en tant que cookie
        this.router.navigate(['/calendar']);
        console.log('connecté');
      },
      error: (err: HttpErrorResponse) => { // utiliser HttpErrorResponse ici
        console.log(err);
        this.errorMessage = err.error.message; // remplir la propriété errorMessage avec le message d'erreur
      }
    });
  }

  showRegisterForm() {
    this.router.navigate(['/register']);
  }
}
