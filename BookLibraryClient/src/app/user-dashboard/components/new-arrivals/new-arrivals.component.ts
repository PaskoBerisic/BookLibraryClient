import { Component, OnInit } from '@angular/core';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {
  books: any[]= [];
  constructor(private bookLibraryService: BookLibraryService) { }
  ngOnInit(): void {
    this.bookLibraryService.getItemsByFilter('Books/ByYearDesc')
    .subscribe((books: any) => {
      this.books = books;
    })
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
