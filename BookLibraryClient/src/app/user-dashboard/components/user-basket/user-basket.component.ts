import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserBasket } from 'src/app/models/user-basket.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

const API_URL = "https://localhost:44323/api/";


@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.css']
})
export class UserBasketComponent implements OnInit {
  baskets: UserBasket[] = [];
  currentBasket: UserBasket = {};
  constructor(private bookLibraryService: BookLibraryService,
    private http: HttpClient,
    private route: ActivatedRoute ) { }
  ngOnInit(): void {

    //this.getBasket(this.route.snapshot.params["id"]);
    this.http.get(API_URL + 'Admin/UserBaskets/' + 1)
    .subscribe((basket: any) => {
      this.currentBasket = basket;
      console.log(this.currentBasket);
    });
  }
  
  getBasket(id: string) {
    this.http.get(API_URL + 'Admin/UserBaskets/' + 1)
      .subscribe((basket: any) => {
        this.currentBasket = basket;
        console.log(this.currentBasket);
      });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
