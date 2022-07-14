import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Publisher } from 'src/app/models/publisher.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent implements OnInit {
  publisher: Publisher = {};
  books: Book[] = [];
  booksId:any;
  bookArr: any = [];
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
      console.log(this.books);
    });
  }
  addPublisher(publisher: Publisher){
    publisher.books = this.bookArr;
    this.bookLibraryService.postItem('Admin/Publisher', publisher);
    console.log(publisher);
  }
  addToArray(id: number){
    this.bookArr.push({id});
    console.log(this.bookArr);  
  }
  addBooks(id: number){
    this.booksId = id;
  }

}
