import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserBasket } from 'src/app/models/user-basket.model';
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
  
  constructor(private bookLibraryService: BookLibraryService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private storageService: StorageService ) { }

  ngOnInit(): void {
    this.isAdminLogged = this.storageService.isAdminLoggedIn();
    this.isLogged = this.storageService.isLoggedIn();
    let id = this.storageService.getUser().id;
    this.getUser(id);
  }
  
  getUser(id: string) {
    this.http.get(API_URL + 'Admin/Users/' + id)
      .subscribe((user: any) => {
        this.user = user;
        console.log(this.user);
      });
  }

  // getBaskets() {
  //   this.bookLibraryService.getItems('Admin/UserBaskets/')
  //     .subscribe((baskets: any) => {
  //       this.baskets = baskets;
  //       console.log(this.baskets);
  //     });
  // }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
