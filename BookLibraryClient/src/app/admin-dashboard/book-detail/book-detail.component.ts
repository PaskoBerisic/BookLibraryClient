import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const API_URL = "https://localhost:44323/api/";
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnChanges {
  books: any[] = [];
  @Input() viewMode = false;

  @Input() currentBook: Book ={
    id: undefined,
    title: '',
    publisherId: 0,
    yearOfPublish: 0,
    description: '',
    languageId: 0,
    rentalPrice: 0,
    listPrice: 0,
    unitNumber: 0,
    createdBy: 0,
    created: '',
    updatedBy: 0,
    updated: '',};

  message = '';
  postId: any;
  constructor(
    private bookLibraryService: BookLibraryService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    if(!this.viewMode){
      this.message = '';
      this.getBook(this.route.snapshot.params["id"]);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
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
    .subscribe((hero: any) => {
      this.currentBook = hero;
      console.log(this.currentBook);
    }); 
  
  }

  addBook(currentBook: Book){
    this.http.post < any > (API_URL, currentBook)
    .subscribe(response => {
    console.log(response); 
    }); 
  }

  updateBook(currentBook: Book): void{
    this.http.put < any > (API_URL, currentBook)
    .subscribe(data => this.postId = data.id);  
  }
  deleteBook(currentBook: Book): void{
    this.http.delete(API_URL + currentBook.id)
    .subscribe(() => console.log('Delete successful'));
  
  }
}

