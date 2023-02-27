import { Injectable } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
const AUTH_API = 'http://localhost:8080/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const USER_KEY = 'auth-user';
const USER_KEY2 = 'auth-token';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private profil!: string;
  constructor(private http: HttpClient) {}

  loginAuth(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/signin',
      {
        email,
        password,
      },

      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    console.log('Déconnexion');
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(USER_KEY2);
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }

  fetchProfilById(id : number): Observable<any>{
    return this.http.get('http://localhost:8080/api/user/${id}')
  }

}
