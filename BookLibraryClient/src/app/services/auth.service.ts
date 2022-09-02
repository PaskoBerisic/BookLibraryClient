import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';

const AUTH_API = "https://localhost:44323/api/Users/Authenticate";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }
  
  login(username: string, password: string): Observable<any> {
    return this.http.post( AUTH_API,{ username, password }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post( AUTH_API, { username, email, password }, httpOptions);
  }

  logout(): Observable<any> {
    return of(true);
    // return this.http.post(AUTH_API + 'auth/logout', { }, httpOptions);
  }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('auth-token');
    return !this.jwtHelper.isTokenExpired(token!);
  }
}
