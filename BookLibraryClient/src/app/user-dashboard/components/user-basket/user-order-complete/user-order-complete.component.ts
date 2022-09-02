import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-user-order-complete',
  templateUrl: './user-order-complete.component.html',
  styleUrls: ['./user-order-complete.component.css']
})
export class UserOrderCompleteComponent implements OnInit {
  isLogged: any;
  isAdminLogged: any;
  user: User = {};  
  order: Order = {};  
  constructor(private storageService: StorageService, private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.isAdminLogged = this.storageService.isAdminLoggedIn();
    this.isLogged = this.storageService.isLoggedIn();
    let id = this.storageService.getUser().id;
    this.getUser(id);
  }
  
  getUser(id: string) {
    this.bookLibraryService.getItemByID('Users/', id)
      .subscribe((user: any) => {
        this.user = user;
        console.log(this.user);
      });
  }

  onSubmit(){
    this.order.userId = this.user.id;
    this.order.userBasketId = this.user.userBasket.id;
    this.order.currency = this.user.userBasket.currency;  
    this.order.books = this.user.userBasket.books;
    this.bookLibraryService.postItem('Orders', this.order);
  }

}
