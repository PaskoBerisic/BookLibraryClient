import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Order } from '../models/order.model';
import { BookLibraryService } from '../services/book-library.service';

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
  constructor(private bookLibraryService: BookLibraryService) { }
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
    this.bookLibraryService.getItems('Order')
    .subscribe((orders: any) => {
      this.orders = orders;
      console.log(this.orders);
    })
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
