import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

const API_URL = "https://localhost:0/UPDATE";


@Injectable({
  providedIn: 'root'
})
export class BookLibraryService {

  // Get
  books: any[] = [];

  // Get ID
  getBook: any = {
    title: '',
    description: '',
    publisher: '',
    yearOfPublish: '',
    language: '',
    rentalPrice: 0,
  }

  // Post
  addBook: Book = {
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
  };
  postId: any;

  // Put
  updateBook: Book = {
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
  };

  // Delete
  delBook: Book = {
    id: undefined
  }
  constructor(private http: HttpClient) { }

   //Get
   getBookes(): Observable<Book> {
    return this.http.get(API_URL + 'all').pipe();
  }

   //Get ID
   getBookByID(id: any) {
    this.http.get(API_URL + id) 
      .subscribe((book: any) => {
        this.getBook = book;
        console.log(this.getBook);
      });
  }

   //Post
   
   postBook() {
    this.http.post < any > (API_URL, this.addBook).subscribe(data => {
      this.postId = data.id;
    });
  }

   //Put
   putBook() {
    this.http.put < any > (API_URL, this.updateBook)
      .subscribe(data => this.postId = data.id);
  }

   //Delete ID
   deleteBook(id: any) {
    this.http.delete(API_URL + id)
      .subscribe(() => console.log('Delete successful'));
  }
}
