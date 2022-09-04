import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Location } from '@angular/common';
import { StorageService } from 'src/app/services/storage.service';
import { Book } from 'src/app/models/book.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book = {};
  user: User = {};
  request: any = {};
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bookLibraryService: BookLibraryService,
    private storageService: StorageService) { }
  ngOnInit(): void {
    this.getBook();
    let id = this.storageService.getUser().id;
    this.getUser(id);
  }

  getBook(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookLibraryService.getItemByID('Books/', id)
      .subscribe((item: any) => {
        this.book = item;
        console.log(this.book);
      });
  }

  getUser(id: string) {
    this.bookLibraryService.getItemByID('Users/', id)
      .subscribe((user: any) => {
        this.user = user;
        console.log(this.user);
      });
  }

  addToBasket(id: number) {
    this.request.bookId = id;
    this.request.userBasketId = this.user.userBasket.id;
    this.bookLibraryService.postItem('UserBasket/AddBook', this.request);
  }

  goBack(): void {
    this.location.back();
  }
}
