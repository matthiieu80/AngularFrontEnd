// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import { Router } from  '@angular/router';
// import { AuthService } from "../../services/auth.service";
// import {HttpClient} from "@angular/common/http";
// import {UserService} from "../../services/user.service";
// import {StorageService} from "../../services/stockage.service";
//
// export class ConnexionComponent  {
//
//
//
//   form: any = {
//     username: null,
//     password: null
//   };
//
//   isLoggedIn = false;
//   isLoginFailed = false;
//   errorMessage = '';
//   roles: string[] = [];
//   loginForm!: FormGroup;
//   isSubmitted  =  false;
//   constructor(private authService: AuthService,
//               private router: Router,  private formBuilder: FormBuilder, private http: HttpClient ,private userService: UserService, private storageService: StorageService ) { }
//
//
//
//
//   reloadPage(): void {
//     window.location.reload();
//   }
//
//   get formControls() { return this.loginForm.controls; }
//
//
//   seConnecter() {
//     console.log(this.loginForm.value);
//     this.isSubmitted = true;
//     if(this.loginForm.invalid){
//       return;
//     }
//   }
//
//   ngOnInit(): void {
//   }
//
//
//
//
//
// }
