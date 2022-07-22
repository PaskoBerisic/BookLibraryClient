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
  authorArr: Author[] = [];
  genreArr: Genre[] = [];
  orderArr: Order[] = [];

  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Admin/Languages')
    .subscribe((languages: any) => {
      this.languages = languages;
    })
    this.bookLibraryService.getItems('Admin/Genres')
    .subscribe((genres: any) => {
      this.genres = genres;
    })
    this.bookLibraryService.getItems('Admin/Publishers')
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
    book.authors = this.authorArr;
    book.genres = this.genreArr;
    book.orders = this.orderArr;
    this.bookLibraryService.postItem('Book',book);
    console.log(book);
  }

  addLanguage(id: number){
    this.book.languageId= id;
  }
  addPublisher(id: number){
    this.book.publisherId = id;
  }

  addToAuthorArray(id: number){
  let index = this.authorArr.findIndex(element => element.id === id);
    console.log('Index ' + index);

    if(index === -1){
      //console.log('findIndex ' + variabla);
      this.authorArr.push({id});
      console.log('After push: ' + this.authorArr)  
      //this.bookArr.splice(variabla);
    }
    else{
      this.authorArr.splice(index,1);
      console.log('After slice: ' + this.authorArr)
    }
  }
  addToGenreArray(id: number){
    let index = this.genreArr.findIndex(element => element.id === id);
    console.log('Index ' + index);

    if(index === -1){
      //console.log('findIndex ' + variabla);
      this.genreArr.push({id});
      console.log('After push: ' + this.genreArr)  
      //this.bookArr.splice(variabla);
    }
    else{
      this.genreArr.splice(index,1);
      console.log('After slice: ' + this.genreArr)
    }    
  }
  addToOrderArray(id: number){
    let index = this.orderArr.findIndex(element => element.id === id);
    console.log('Index ' + index);

    if(index === -1){
      //console.log('findIndex ' + variabla);
      this.orderArr.push({id});
      console.log('After push: ' + this.orderArr)  
      //this.bookArr.splice(variabla);
    }
    else{
      this.orderArr.splice(index,1);
      console.log('After slice: ' + this.orderArr)
    }
  }
}
