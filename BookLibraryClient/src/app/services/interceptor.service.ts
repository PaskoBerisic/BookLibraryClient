import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  token: string = '';

  constructor(private storageService: StorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this.token = this.storageService.getToken();
   console.log(this.token);
   if(this.token){
      const tokenReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.token.slice(1,-1)) });
      console.log(tokenReq);
      return next.handle(tokenReq);
   }
   return next.handle(req);
  }
}
