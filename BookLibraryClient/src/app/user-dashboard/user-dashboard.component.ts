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

  isLogged: any;
  isAdminLogged: any;
  user: User = {};  
  request: any = {};
  constructor(
    private bookLibraryService: BookLibraryService,
    private http: HttpClient,
    private storageService: StorageService) { }
  ngOnInit(): void {
    this.bookLibraryService.getItems('Books')
    .subscribe((books: any) => {
      this.books = books;
    });
    this.bookLibraryService.getItemsByFilter('Books/ByRentalNumber')
    .subscribe((books: any) => {
      this.topBooks = books;
    });
    this.bookLibraryService.getItemsByFilter('Books/ByYearDesc')
    .subscribe((books: any) => {
      this.newBooks = books;
    });

    this.isAdminLogged = this.storageService.isAdminLoggedIn();
    this.isLogged = this.storageService.isLoggedIn();

    let id = this.storageService.getUser().id;
    this.getUser(id);
    this.getOrders(id);
  }

  getUser(id: any) {
    this.bookLibraryService.getItemByID('Users/', id)
      .subscribe((user: any) => {
        this.user = user;
      });
  }   
  getOrders(id: any){
    this.bookLibraryService.getItemByID('Orders/UserOrders/', id)
    .subscribe((orders: any) => {
      this.orders = orders;
      console.log(this.orders);
    });
  }

  addToBasket(id:number){
    this.request.bookId= id;
    this.request.userBasketId= this.user.userBasket.id;
    this.bookLibraryService.postItem('UserBasket/AddBook', this.request);
  }
  
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
