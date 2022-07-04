import { Component, OnInit } from '@angular/core';
import { BookLibraryService } from 'src/app/services/book-library.service';
@Component({
  selector: 'app-book-control',
  templateUrl: './book-control.component.html',
  styleUrls: ['./book-control.component.css']
})
export class BookControlComponent implements OnInit {
  books: any[]= [];
  authors: undefined;
constructor(private bookLibraryService: BookLibraryService) { }

ngOnInit(): void {
  this.bookLibraryService.getItems('Book')
  .subscribe((books: any) => {
    this.books = books;
    console.log(this.books);
    console.log(this.authors);
  })
}

deleteBook(id: any){
  this.bookLibraryService.deleteItem('Book/', id);
}
}


