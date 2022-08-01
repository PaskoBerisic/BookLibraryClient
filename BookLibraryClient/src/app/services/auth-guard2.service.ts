import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard2Service implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(): boolean{
    if(!this.auth.isAuthenticated()){
      alert("hitted");
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
