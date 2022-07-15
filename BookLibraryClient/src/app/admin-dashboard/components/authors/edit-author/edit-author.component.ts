import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { Author } from 'src/app/models/author.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Location } from '@angular/common';
import { Book } from 'src/app/models/book.model';

const API_URL = "https://localhost:44323/api/";

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  currentAuthor: Author = {};
  books: Book[] = [];
  bookArr: Book[] = [];
  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute,
    private location: Location,
    private bookLibraryService: BookLibraryService
    ) { }

  ngOnInit(): void {
    this.getAuthor(this.route.snapshot.params["id"]);
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
    });
  }

  // foo(){
  //   for(let i = 0; i < this.books.length; i++){
  //       if( this.books[0].authorFirstName === this.currentAuthor.firstName && this.books[0].authorFirstName === this.currentAuthor.lastName){
  //         console.log(
  //           this.books[i]
  //           .Authors[this.books[i].Authors.length]);
  //       }
  //       else{ 
  //         console.log('notFound');
  //       }
  //   }
  // }
  


  getAuthor(id: string){
    this.http.get(API_URL + 'Author/' + id)
      .subscribe((author: any) => {
        this.currentAuthor = author;
        console.log(this.currentAuthor);
      }); 
  }

  addToArray(id: number){
    this.bookArr.push({id});
    console.log(this.bookArr);
  }

  updateAuthor(author: Author){
    author.countryId = this.currentAuthor.country.id;
    author.books = this.bookArr;
    this.bookLibraryService.putItem('Author/', author);
  }

  deleteAuthor(author: Author){
  }

  goBack(): void {
    this.location.back();
  }
}
