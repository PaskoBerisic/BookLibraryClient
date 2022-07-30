import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { StorageService } from 'src/app/services/storage.service';

const API_URL = "https://localhost:44323/api/";

@Component({
  selector: 'app-user-order-complete',
  templateUrl: './user-order-complete.component.html',
  styleUrls: ['./user-order-complete.component.css']
})
export class UserOrderCompleteComponent implements OnInit {
  isLogged: any;
  isAdminLogged: any;
  user: User = {};  
  order: Order = {};  
  sum: number = 0;
  constructor(private storageService: StorageService, private http: HttpClient, private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.isAdminLogged = this.storageService.isAdminLoggedIn();
    this.isLogged = this.storageService.isLoggedIn();
    let id = this.storageService.getUser().id;
    this.getUser(id);
    this.calculateOrder();
  }
  
  getUser(id: string) {
    this.http.get(API_URL + 'Admin/Users/' + id)
      .subscribe((user: any) => {
        this.user = user;
        console.log(this.user);
      });
  }
  calculateOrder(){
    for(let i =0; i < this.user.userBasket.books.length; i++){
      this.sum += this.user.userBasket.books[i].rentalPrice;
      console.log(this.user);
      console.log(this.sum);
    }
  }
  onSubmit(){
    this.order.UserId = this.user.id;
    this.order.currency = this.user.userBasket.currency;  
    this.order.books = this.user.userBasket.books;
    this.bookLibraryService.postItem('Order', this.order);
    console.log(this.order);
  }
}
