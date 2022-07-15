import { Component, OnInit } from '@angular/core';
import { BookLibraryService } from 'src/app/services/book-library.service';


@Component({
  selector: 'app-top-rentals',
  templateUrl: './top-rentals.component.html',
  styleUrls: ['./top-rentals.component.css']
})
export class TopRentalsComponent implements OnInit {
  books: any[]= [];
  constructor(private bookLibraryService: BookLibraryService) { }
  ngOnInit(): void {
    this.bookLibraryService.getItemsByFilter('Book/ByRentalNumber')
    .subscribe((books: any) => {
      this.books = books;
    })
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
