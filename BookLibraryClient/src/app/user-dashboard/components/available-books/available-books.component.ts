import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { StorageService } from 'src/app/services/storage.service';

const API_URL = "https://localhost:44323/api/";

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {
  books: any[]= [];
  user: User = {};
  request: any = {};
  constructor(private bookLibraryService: BookLibraryService, private storageService: StorageService, private http: HttpClient) { }
  
  ngOnInit(): void {
    this.bookLibraryService.getItems('Books')
    .subscribe((books: any) => {
      this.books = books;
    });
    let id = this.storageService.getUser().id;
    this.getUser(id);
  }

  getUser(id: string) {
    this.http.get(API_URL + 'Users/' + id)
      .subscribe((user: any) => {
        this.user = user;
        console.log(this.user);
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
