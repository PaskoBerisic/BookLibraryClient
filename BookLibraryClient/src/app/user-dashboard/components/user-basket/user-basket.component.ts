import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { StorageService } from 'src/app/services/storage.service';

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
  constructor(private bookLibraryService: BookLibraryService, private storageService: StorageService) { }

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

  removeFromBasket(id: number) {
    this.request.bookId = id;
    this.request.userBasketId = this.user.userBasket.id;
    this.bookLibraryService.postItem('UserBasket/DeleteBook', this.request);
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

}
