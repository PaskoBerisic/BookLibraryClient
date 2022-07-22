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
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
    });
    this.bookLibraryService.getItems('Admin/Users')
    .subscribe((users: any) => {
      this.users = users;
    });
  }
  addOrder(order: Order){
    JSON.stringify(this.bookArr);
    order.books = this.bookArr;
    this.bookLibraryService.postItem('Order', order);
    console.log(order);
    
  }
  addToArray(id: number){
    let index = this.bookArr.findIndex(element => element.id === id);
    console.log('Index ' + index);

    if(index === -1){
      //console.log('findIndex ' + variabla);
      this.bookArr.push({id});
      console.log('After push: ' + this.bookArr)  
      //this.bookArr.splice(variabla);
    }
    else{
      this.bookArr.splice(index,1);
      console.log('After slice: ' + this.bookArr)
    }

    /*this.bookArr.push({id});
    console.log(this.bookArr);*/  
  
    //console.log(this.bookArr);  
    //console.log('JSON ' + JSON.stringify(this.bookArr));
  }
  
  addUsers(id: number){
    this.order.UserId = id;
  }

}
