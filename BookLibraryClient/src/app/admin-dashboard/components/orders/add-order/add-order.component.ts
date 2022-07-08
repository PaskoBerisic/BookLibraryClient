import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Order } from 'src/app/models/order.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  order: Order = {};
  books: Book[] = [];
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
      console.log(this.books);
    });
  }
  addOrder(order: Order){
    this.bookLibraryService.postItem('Order', order);
    console.log(order);
  }

}
