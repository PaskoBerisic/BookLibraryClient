import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { StorageService } from 'src/app/services/storage.service';

const API_URL = "https://localhost:44323/api/";

@Component({
  selector: 'app-user-payment-info',
  templateUrl: './user-payment-info.component.html',
  styleUrls: ['./user-payment-info.component.css']
})
export class UserPaymentInfoComponent implements OnInit {
  isLogged: any;
  isAdminLogged: any;
  user: User = {};  
  
  constructor(private storageService: StorageService, private http: HttpClient) { }

  ngOnInit(): void {
    this.isAdminLogged = this.storageService.isAdminLoggedIn();
    this.isLogged = this.storageService.isLoggedIn();
    let id = this.storageService.getUser().id;
    this.getUser(id);
  
  }
  getUser(id: string) {
    this.http.get(API_URL + 'Admin/Users/' + id)
      .subscribe((user: any) => {
        this.user = user;
        console.log(this.user);
      });
  }
  checkout() { }
}
