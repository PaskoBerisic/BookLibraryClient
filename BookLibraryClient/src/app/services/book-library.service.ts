import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

const API_URL = "https://localhost:44323/api/";


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
    yearOfPublish: 0,
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
   getItems(path: string): Observable<Book> {
    return this.http.get(API_URL + path + '/all').pipe();
  }

   //Get ID
   getItemByID(path: string,id: any) {
    this.http.get(API_URL + path + id) 
      .subscribe((character: any) => {
        this.getBook = character;
        console.log(this.getBook);
      });
  }

   //Post
   postItem(path: string, item: any) {
    return this.http.post < any > (API_URL + path, item).subscribe(data => this.postId = data.id);
    }

   //Put
   putItem(path: string, item: any) {
    this.http.put < any > (API_URL + path, item)
      .subscribe(data => this.postId = data.id);
  }

   //Delete ID
   deleteItem(path: string, id: any) {
    this.http.delete(API_URL + path + id)
      .subscribe(() => console.log('Delete successful'));
  }
}
