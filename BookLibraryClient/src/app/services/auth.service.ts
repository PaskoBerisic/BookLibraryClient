import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const AUTH_API = "https://localhost:44323/api/Admin/Authenticate";
//https://localhost:44323/api/Admin/Authenticate
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  
  login(username: string, password: string): Observable<any> {
    console.log(username);
    console.log(password);
    return this.http.post(
       AUTH_API  //+ 'Admin/Authenticate'
       ,{
       username,
       password
     }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'auth/register',
      {
        username,
        email,
        password
      }, httpOptions);
  }

  logout(): Observable<any> {
    return of(true);
    // return this.http.post(AUTH_API + 'auth/logout', { }, httpOptions);
  }
}
