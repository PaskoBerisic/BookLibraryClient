import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  role: any;
  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      console.log('getUser storageService ' + user);
      return JSON.parse(user);
    }

    return {};
  }
  public isAdminLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    this.role = this.getUser().role;
    if (user && this.role === 0) {
      console.log('ROLA ' + this.role);
      return true;
    }
    return false;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    this.role = this.getUser().role;
    if (user && this.role != 0) {
      console.log('ROLA ' + this.role);
      return true;
    }
    return false;
  }
}
