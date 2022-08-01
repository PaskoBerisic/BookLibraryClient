import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Order } from '../models/order.model';
import { UserBasket } from '../models/user-basket.model';
import { User } from '../models/user.model';
import { BookLibraryService } from '../services/book-library.service';
import { StorageService } from '../services/storage.service';

const API_URL = "https://localhost:44323/api/";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  books: any[]= [];
  topBooks: Book[] = [];
  newBooks: Book[] = [];
  orders: Order[] = [];
  basket: UserBasket = {};
  tempBooks: any;

  isLogged: any;
  isAdminLogged: any;
  user: User = {};  
  constructor(
    private bookLibraryService: BookLibraryService,
    private http: HttpClient,
    private storageService: StorageService) { }
  ngOnInit(): void {
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
    });
    this.bookLibraryService.getItemsByFilter('Book/ByRentalNumber')
    .subscribe((books: any) => {
      this.topBooks = books;
    });
    this.bookLibraryService.getItemsByFilter('Book/ByYearDesc')
    .subscribe((books: any) => {
      this.newBooks = books;
    });
    this.isAdminLogged = this.storageService.isAdminLoggedIn();
    this.isLogged = this.storageService.isLoggedIn();
    let id = this.storageService.getUser().id;
    this.getUser(id);
    console.log(this.user);
  }
  getUser(id: string) {
    this.http.get(API_URL + 'Admin/Users/' + id)
      .subscribe((user: any) => {
        this.user = user;
        console.log(this.user);
      });
  }   
  addToBasket(){
    this.http.get(API_URL + 'Admin/UserBaskets/' + 1)
    .subscribe((basket: any) => {
      this.basket = basket;
      console.log(this.basket);
    });  
    console.log('Before: ' + this.tempBooks);
    this.tempBooks = [{id:1}, {id:2}, {id:4}];
    console.log(this.tempBooks);
    this.basket.books = this.tempBooks;
    this.basket.userId = 3;
    console.log(this.basket);
    this.bookLibraryService.putItem('Admin/UserBaskets', this.basket)
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
