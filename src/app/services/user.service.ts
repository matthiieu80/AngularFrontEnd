import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {
  }

  userdata: User = {
    username: '',
    email: '',
    prenom: '',
    nom: '',
    passWord: '',
    id: 0
  };

  fetchUser(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/api/user/id');
  }


  createUser(createUser: any): Observable<void> {
    return this.http.post<void>('http://localhost:8080/api/auth/signup', createUser);
  }


  suppUser(suppUser: any): Observable<void> {
    return this.http.post<void>("http://localhost:8080/api/user/id", suppUser);
  }

  getUserById(id: number): Observable<User> {
    const url = `http://localhost:8080/api/users/${id}`;
    return this.http.get<User>(url);
  }

  login(username: string, password: string): Observable<User> {
    const body = { username, password };
    return this.http.post<User>(`${this.apiUrl}/login`, body);
  }

  updateUser(update : User):Observable<User>{
    return this.http.post<User>("http://localhost:8080/api/update", update)
  }
}
