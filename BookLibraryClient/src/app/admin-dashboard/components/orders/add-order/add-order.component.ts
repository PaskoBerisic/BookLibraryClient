import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Book } from 'src/app/models/book.model';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  order: Order = {};
  books: Book[] = [];
  booksId:any;
  users: User[] = [];
  userId: any;
  bookArr: any[] = [];
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Books')
    .subscribe((books: any) => {
      this.books = books;
    });
    this.bookLibraryService.getItems('Users')
    .subscribe((users: any) => {
      this.users = users;
    });
  }
  
  addOrder(order: Order){
    JSON.stringify(this.bookArr);
    order.bookIds = this.bookArr;
    this.bookLibraryService.postItem('Orders', order);
  }
  
  addToArray(id: number){
    let index = this.bookArr.findIndex(element => element === id);
  
      if(index === -1){
        this.bookArr.push(id);
      }
      else{
        this.bookArr.splice(index,1);
      }
    }
  
  addUsers(id: number){
    this.order.userId = id;
  }
}
