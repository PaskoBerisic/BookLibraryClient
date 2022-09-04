import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  // constructor(public auth: AuthService, public router: Router) { }

  // canActivate(route: ActivatedRouteSnapshot): boolean {
  //   const expectedRole = route.data.['expectedRole'];
    
  //   const token = sessionStorage.getItem('auth-token');

  //   const tokenPayload = decode(token!);
    
  //   if(!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  //   return true;
  // }
  constructor(public auth: AuthService, public router: Router, private storageService: StorageService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property         

    const expectedRole = this.storageService.getUser().role;
    const token = sessionStorage.getItem('auth-token');
    // decode the token to get its payload
    const tokenPayload:any = decode(token!);
    if ( this.auth.isAuthenticated() && expectedRole === 0 ) {
      return true;
    }
    this.router.navigate(['dashboard']);
    return false;
  }
}
