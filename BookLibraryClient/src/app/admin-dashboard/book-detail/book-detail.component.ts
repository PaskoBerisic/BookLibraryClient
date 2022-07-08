import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const API_URL = "https://localhost:44323/api/Book/";
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  books: any[] = [];
  book: any = {};  
  constructor(
    private bookLibraryService: BookLibraryService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
      this.book = this.getBook('1');
    }
  


  getBooks(){
    this.bookLibraryService.getItems('Books')
    .subscribe((books: any) => {
       this.books = books;
       console.log(books);
      });
 
  }

  getBook(id: string){
    this.http.get(API_URL + id)
    .subscribe((book: any) => {
      this.book = book;
      console.log(this.book);
    }); 
  
  }
}
