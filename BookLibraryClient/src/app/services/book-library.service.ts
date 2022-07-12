import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  postId: any;

  constructor(private http: HttpClient) { }

   //Get
   getItems(path: string): Observable<any> {
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

    // postItem(path: string, item: any) {
    //   let jsonItem = JSON.stringify(item);
    //   const headers = { 'content-type': 'application/json'}  
    //   return this.http.post < any > (API_URL + path, jsonItem, {'headers':headers}).subscribe(data => this.postId = data.id);
    //   }
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
