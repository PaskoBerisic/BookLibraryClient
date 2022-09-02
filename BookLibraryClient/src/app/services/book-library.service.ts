import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "https://localhost:44323/api/";

@Injectable({
  providedIn: 'root'
})
export class BookLibraryService {
  item: any;
  postId: any;
  constructor(private http: HttpClient) { }

   //Get
   getItems(path: string): Observable<any> {
    return this.http.get(API_URL + path).pipe();
  }

  getItemsByFilter(path: string): Observable<any> {
    return this.http.get(API_URL + path).pipe();
  }

   //Get ID
   getItemByID(path: string,id: any): Observable<any> {
    return this.http.get(API_URL + path + id); 
   }

  //Post
   postItem(path: string, item: any) {
    return this.http.post < any > (API_URL + path, item).
    subscribe(
      data => this.postId = data.id,
      response => { 
        console.log('POST call in error', response); 
        window.alert(response.error);
      },
     () => { 
      console.log('Successful'); 
      window.alert("Successful");
      window.location.reload();
    });
    }

   //Put
   putItem(path: string, item: any) {
    this.http.put < any > (API_URL + path, item)
      .subscribe(  
        data => {this.postId = data.id},
        response => { 
        console.log('PUT call in error', response); 
        window.alert(response.error);
      },
     () => { 
      console.log('Successful'); 
      window.alert("Successful");
      window.location.reload();
    });
  }

   //Delete ID
   deleteItem(path: string, id: any) {
    this.http.delete < any >(API_URL + path + id)
    .subscribe(
      response => { 
        console.log('DELETE call in error', response); 
        window.alert(response.error);
      },
     () => { 
      console.log('Successful'); 
      window.alert("Successful");
      window.location.reload();
    });
  }
}
