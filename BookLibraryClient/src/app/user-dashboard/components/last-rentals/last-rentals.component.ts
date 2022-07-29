import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-last-rentals',
  templateUrl: './last-rentals.component.html',
  styleUrls: ['./last-rentals.component.css']
})
export class LastRentalsComponent implements OnInit {
  books: any[]= [];
  users: User[] = [];
  user: User = {};
  date: any;
  
  constructor(private bookLibraryService: BookLibraryService) { }
  ngOnInit(): void {
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
    });
    this.bookLibraryService.getItems('Admin/Users')
    .subscribe((users: any) => {
      this.users = users;
      console.log(this.users);
      this.user = this.users[1];
    });
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
