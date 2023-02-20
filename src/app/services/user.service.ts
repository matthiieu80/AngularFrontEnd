import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  fetchUser(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/api/users');
  }


  createUser(createUser: any): Observable<void> {
    return this.http.post<void>('http://localhost:8080/api/add-user', createUser);
  }

  suppUser(suppUser: any): Observable<void> {
    return this.http.post<void>("http://localhost:8080/api/user/id", suppUser);
  }
}
