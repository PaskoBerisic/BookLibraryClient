import { Component, OnInit } from '@angular/core';
import { BookLibraryService } from '../services/book-library.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
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
