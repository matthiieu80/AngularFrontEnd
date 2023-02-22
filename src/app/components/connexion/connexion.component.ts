import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from "../../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  show = false;

  showElement() {
    this.show = true;
  }
  Users = {
    username: '',
    password: '',
  };
  loginForm!: FormGroup;
  isSubmitted  =  false;
  constructor(private authService: AuthService,
              private router: Router, private formBuilder: FormBuilder, private http: HttpClient ,private userService: UserService ) { }
  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { return this.loginForm.controls; }
  seConnecter(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.signIn(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }

  LogIn(credentials: any) {
    return this.http.post('http://localhost:8080/api/auth/signin', credentials);
  }

  register() {
    this.userService
      .createUser(this.Users)
      .subscribe(ok => {
        alert('Utilisateur bien ajouté')
      })
  }
}
