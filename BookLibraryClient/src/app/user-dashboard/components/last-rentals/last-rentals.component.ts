import { Component, OnInit } from '@angular/core';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-last-rentals',
  templateUrl: './last-rentals.component.html',
  styleUrls: ['./last-rentals.component.css']
})
export class LastRentalsComponent implements OnInit {
  books: any[]= [];
  orders: any[] = [
    {id:1, user: 'Test User', books:{name:'Book 2'}, date:1-12-2002, status:true, total: 2.9, currency: '$' },
                                    
    {id:2, user: 'Test User 3', books:{name:'Book 30'}, date:2019-12-3, status:false, total: 5.9, currency: '€' },
    
    {id:3, user: 'Test User 99', books:{name:'Book 1', fname: 'Bppl3 '}, date:2012-2-8, status:true, total: 1.9, currency: '€' },
  ]
  constructor(private bookLibraryService: BookLibraryService) { }
  ngOnInit(): void {
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
    })
    console.log( 'WTF ! ! ! !');
    console.log(this.orders);
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
