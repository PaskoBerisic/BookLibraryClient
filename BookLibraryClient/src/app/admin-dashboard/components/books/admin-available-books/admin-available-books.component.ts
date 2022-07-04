import { Component, OnInit } from '@angular/core';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-admin-available-books',
  templateUrl: './admin-available-books.component.html',
  styleUrls: ['./admin-available-books.component.css']
})
export class AdminAvailableBooksComponent implements OnInit {
  books: any[]= [];
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
    })
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

}
