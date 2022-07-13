import { Component, OnInit,} from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { Book } from 'src/app/models/book.model';
import { Genre } from 'src/app/models/genre.model';
import { Language } from 'src/app/models/language.model';
import { Order } from 'src/app/models/order.model';
import { Publisher } from 'src/app/models/publisher.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = {}
  languages: Language[] = [];
  genres: Genre[] = [];
  publishers: Publisher[] = [];
  authors: Author[] = [];

  orders: Order[] = [];
  authorId: any;
  genreId: any;
  orderId: any;

  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Admin/Language')
    .subscribe((languages: any) => {
      this.languages = languages;
    })
    this.bookLibraryService.getItems('Admin/Genre')
    .subscribe((genres: any) => {
      this.genres = genres;
    })
    this.bookLibraryService.getItems('Admin/Publisher')
    .subscribe((publishers: any) => {
      this.publishers = publishers;
    }) 
    this.bookLibraryService.getItems('Author')
    .subscribe((authors: any) => {
      this.authors = authors;
    })
    this.bookLibraryService.getItems('Order')
    .subscribe((orders: any) => {
      this.orders = orders;
      console.log(this.orders);
    })
  }
  
  addBook(book: Book){

    this.book.authors = [{
      id:this.authorId
    }];
    this.book.genres = [{
      id:this.genreId 
    }];
    this.book.orders = [{
      id:this.orderId 
    }];

    console.log(JSON.stringify(book));
    console.log(' ' + this.authorId);
    this.bookLibraryService.postItem('Book',book);
    console.log(book);
  }
  addLanguage(id: number){
    this.book.languageId= id;
  }
  addPublisher(id: number){
    this.book.publisherId = id;
  }
  addAuthor(id: number){
    this.authorId = id;
  }
  addGenre(id: number){
    this.genreId = id;
  }
  addOrder(id: number){
    this.orderId = id;
  }
}
