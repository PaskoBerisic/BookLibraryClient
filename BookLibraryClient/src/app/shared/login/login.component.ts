import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {};
  form: any = {
    username: '',
    password: '',
    token: null
  };
  isLoggedIn = false;
  isAdminLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: any = undefined;

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.role = this.storageService.getUser().roles;
    }
    if (this.storageService.isAdminLoggedIn()) {
      this.isAdminLoggedIn = true;
      this.role = this.storageService.getUser().roles;
    }
    this.isLogged();
  }

  onSubmit(): void {
    const { username, password, token } = this.form;
    console.log(this.form);
    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        
        this.role = this.storageService.getUser().role;
        //console.log('Role' + this.role);
        if(this.role === 0){
          this.isLoginFailed = false;
          this.isAdminLoggedIn = true;
          alert("Welcome admin");
        }
        else{
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          alert("Welcome");
        }
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        alert("Login failed! Please try again.");
        this.isLoginFailed = true;
      }
    });
  }
  isLogged(){
    if(this.isAdminLoggedIn || this.isLoggedIn){
      this.router.navigate(['dashboard']);
    }
  }
  reloadPage(): void {
    window.location.reload();
  }
}
