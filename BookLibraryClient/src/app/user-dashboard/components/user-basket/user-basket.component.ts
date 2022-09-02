import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { StorageService } from 'src/app/services/storage.service';

const API_URL = "https://localhost:44323/api/";

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.css']
})
export class UserBasketComponent implements OnInit {
  isLogged: any;
  isAdminLogged: any;
  user: User = {};  
  request: any = {};
  constructor(private bookLibraryService: BookLibraryService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private storageService: StorageService ) { }

  ngOnInit(): void {
    this.isAdminLogged = this.storageService.isAdminLoggedIn();
    this.isLogged = this.storageService.isLoggedIn();
    let id = this.storageService.getUser().id;
    this.getUser(id);
    console.log(this.user);
  }
  
  getUser(id: string) {
    this.http.get(API_URL + 'Admin/Users/' + id)
      .subscribe((user: any) => {
        this.user = user;
        console.log(this.user);
      });
  }

  removeFromBasket(id: number){
    this.request.bookId= id;
    this.request.userBasketId= this.user.userBasket.id;
    
    this.bookLibraryService.postItem('Admin/UserBaskets/DeleteBook', this.request)
    //https://localhost:44323/api/Admin/UserBaskets/DeleteBook

   
    // let index = this.user.userBasket.books.findIndex(element => element.id === id);
    // console.log('Index ' + index);
    
    // if(index === -1){
    //   console.log('-1 - greska')  
    // }
    // else{
    //   this.user.userBasket.books.splice(index,1);
    //   console.log('After slice: ' + this.user.userBasket.books)
    // }

    // this.user.userBasket.userId = this.user.id;
    // this.user.userBasket.currency= 'HRK';
    
    // console.log(this.user.userBasket);    
  }
    
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
