import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
@Component({
  selector: 'app-book-control',
  templateUrl: './book-control.component.html',
  styleUrls: ['./book-control.component.css']
})
export class BookControlComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Books')
      .subscribe((books: any) => {
        this.books = books;
        console.log(this.books);
      })
  }

  deleteBook(id: any) {
    this.bookLibraryService.deleteItem('Books/', id);
  }
}


