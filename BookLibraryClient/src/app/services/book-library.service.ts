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
   getItemByID(path: string,id: any): any {
    this.http.get(API_URL + path + id) 
      .subscribe((character: any) => {
        //this.getBook = character;
        //console.log(this.getBook);
        return character;
      });
      return this.item;
  }

    // postItem(path: string, item: any) {
    //   let jsonItem = JSON.stringify(item);
    //   const headers = { 'content-type': 'application/json'}  
    //   return this.http.post < any > (API_URL + path, jsonItem, {'headers':headers}).subscribe(data => this.postId = data.id);
    //   }
   //Post
   postItem(path: string, item: any) {
    return this.http.post < any > (API_URL + path, item).
    subscribe(
      data => this.postId = data.id,
      response => { 
        console.log('POST call in error', response); 
        window.alert("POST call in error");
      },
     () => { 
      console.log('Added successful'); 
      window.alert("Added successful");
      window.location.reload();
    }
      );
    }

   //Put
   putItem(path: string, item: any) {
    this.http.put < any > (API_URL + path, item)
      .subscribe(data => {this.postId = data.id},
      response => { 
        console.log('PUT call in error', response); 
        window.alert("PUT call in error");
      },
     () => { 
      console.log('Update successful'); 
      window.alert("Update successful");
      window.location.reload();
    });
  }

   //Delete ID
   deleteItem(path: string, id: any) {
    this.http.delete(API_URL + path + id)
      .subscribe(
        response => { 
          console.log('DELETE call in error', response); 
          window.alert("DELETE call in error");
        },
       () => { 
        console.log('Delete successful'); 
        window.alert("Delete successful");
        window.location.reload();
      }
        );
  }
}
