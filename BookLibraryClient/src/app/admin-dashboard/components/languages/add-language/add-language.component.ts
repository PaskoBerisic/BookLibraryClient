import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Language } from 'src/app/models/language.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {
  books: Book[] = [];
  booksId:any;
  language: Language = {};
  bookArr: Book[] = [];
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
    });
  }
  addLanguage(language: Language){
    language.books = this.bookArr;
    this.bookLibraryService.postItem('Admin/Language', language);
    console.log(language);
  }
  addToArray(id: number){
    this.bookArr.push({id});
    console.log(this.bookArr);  
  }
}
