import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Language } from 'src/app/models/language.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Location } from '@angular/common';
import { Book } from 'src/app/models/book.model';
const API_URL = "https://localhost:44323/api/";

@Component({
selector: 'app-edit-language',
templateUrl: './edit-language.component.html',
styleUrls: ['./edit-language.component.css']
})
export class EditLanguageComponent implements OnInit {
  currentLanguage: Language = {};
  books: Book[] = [];
  bookArr: Book[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location,
    private bookLibraryService: BookLibraryService
  ) { }

  ngOnInit(): void {
    this.getLanguage(this.route.snapshot.params["id"]);
    console.log(this.currentLanguage);
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
    });
  }

  getLanguage(id: string){
    this.http.get(API_URL + 'Admin/Languages/' + id)
      .subscribe((language: any) => {
      this.currentLanguage = language;
      console.log(this.currentLanguage);
    });
  }

  addToArray(id: number){
    this.bookArr.push({id});
    console.log(this.bookArr);
  }
  updateLanguage(language: Language){
    language.books = this.bookArr;
    this.bookLibraryService.putItem('Admin/Languages', language);
  }

  deleteLanguage(language: Language){
  }

  goBack(): void {
    this.location.back();
  }
}
