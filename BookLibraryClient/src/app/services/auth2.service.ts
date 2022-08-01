import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {

  constructor(private jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('auth-token');

    return !this.jwtHelper.isTokenExpired(token!);
  }

}
