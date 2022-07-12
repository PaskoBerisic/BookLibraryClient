import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { BookLibraryService } from '../services/book-library.service';

const API_URL = "https://localhost:44323/api/";
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  books: any[] = [];
  currentBook: any = {};
  currentIndex = -1;

  book: any = {
}
postId: any;
title = '';
  constructor(private http: HttpClient, private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  refreshList(): void {
    this.getBooks();
    this.book = {};
    this.currentIndex = -1;
  }
  setActiveBook(book: Book, index: number): void {
    this.book = book;
    this.currentIndex = index;

    console.log(this.book)
  }


  getBooks(){  
    this.bookLibraryService.getItems('Book')
      .subscribe((books: any) => {
         this.books = books;
         console.log(books);
        });
    }
   
  
  getBook(book: Book){
    this.http.get(API_URL + book.id)
    .subscribe((hero: any) => {
      this.book = hero;
      console.log(this.book);
    }); 
  }

  postBook(addBook: Book){
    this.http.post < any > (API_URL, addBook)
      .subscribe(response => {
      console.log(response);  
  });
  }
  putBook(updateBook: Book){
    this.http.put < any > (API_URL, updateBook)
    .subscribe(data => this.postId = data.id);
  }
  deleteBook(book: Book){
    this.http.delete(API_URL + book.id)
    .subscribe(() => console.log('Delete successful'));
  }
}
