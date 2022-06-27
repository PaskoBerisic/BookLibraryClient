import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { BookLibraryService } from '../services/book-library.service';

const API_URL = "";
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  books: any[] = [];

 book: Book = {
  id: undefined,
  title: '',
  publisherId: 0,
  yearOfPublish: 0,
  description: '',
  languageId: 0,
  rentalPrice: 0,
  listPrice: 0,
  unitNumber: 0,
  createdBy: 0,
  created: '',
  updatedBy: 0,
  updated: '',
}
postId: any;

  constructor(private http: HttpClient, private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){  
    this.bookLibraryService.getBooks('Books')
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
