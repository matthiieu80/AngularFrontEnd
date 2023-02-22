import { Injectable } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  signIn(credentials: any) {
    return this.http.post('http://localhost:8080/api/auth/signin', credentials);
  }

  checkTokenValidity(token: string) {
    return this.http.post('http://localhost:8080/api/auth/signin', token);
  }

  public seConnecter(userInfo: Utilisateur){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
