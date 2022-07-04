import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { Location } from '@angular/common';
import { BookLibraryService } from 'src/app/services/book-library.service';
const API_URL = "https://localhost:44323/api/";


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
currentBook: Book = {};
  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute,
    private location: Location,
    private bookLibraryService: BookLibraryService
    ) { }

  ngOnInit(): void {
    this.getBook(this.route.snapshot.params["id"]);
    console.log('This smece ' + this.getBook(this.route.snapshot.params["id"]));
  }

  
    getBook(id: string){
      this.http.get(API_URL + 'Book/' + id)
      .subscribe((hero: any) => {
        this.currentBook = hero;
        console.log(this.currentBook);
      }); 
    }
    updateBook(book: Book){
      this.bookLibraryService.putItem('Book/', book);
    }

    deleteBook(book: Book){


    }
    goBack(): void {
      this.location.back();
    }
}
