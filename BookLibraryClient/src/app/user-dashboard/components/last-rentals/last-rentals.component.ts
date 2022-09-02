import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { StorageService } from 'src/app/services/storage.service';

const API_URL = "https://localhost:44323/api/";

@Component({
  selector: 'app-last-rentals',
  templateUrl: './last-rentals.component.html',
  styleUrls: ['./last-rentals.component.css']
})
export class LastRentalsComponent implements OnInit {
  books: any[]= [];
  date: any;
  orders: Order[] = [];

  isLogged: any;
  isAdminLogged: any;
  user: User = {};  
  
  constructor(private bookLibraryService: BookLibraryService, private storageService: StorageService, private http: HttpClient) { }
  ngOnInit(): void {
    this.bookLibraryService.getItems('Books')
    .subscribe((books: any) => {
      this.books = books;
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
        console.log(this.user);
      });
  }

  getOrders(id: any){
    this.bookLibraryService.getItemByID('Orders/UserOrders/', id)
    .subscribe((orders: any) => {
      this.orders = orders;
      console.log(this.orders);
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
