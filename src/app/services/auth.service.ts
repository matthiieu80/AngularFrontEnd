import { Injectable } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { catchError } from 'rxjs/operators';

const AUTH_API = 'http://localhost:8080/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: false // Ajouter la propriété withCredentials: true ici
};

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginAuth(email: string, password: string): Observable<any> {
    console.log('Tentative de connexion avec lemail ' + email + ' et le mot de passe ' + password);
    return this.http.post(
      AUTH_API + '/signin',
      {
        email,
        password,
      },
      httpOptions
    ).pipe(
      catchError(error => {
        console.log(error);
        throw error;
      })
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    console.log('Tentative dinscription avec lusername ' + username + ', lemail ' + email + ' et le mot de passe ' + password);
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
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
