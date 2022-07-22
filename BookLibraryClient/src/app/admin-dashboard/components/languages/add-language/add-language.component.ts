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
    this.bookLibraryService.postItem('Admin/Languages', language);
    console.log(language);
  }
  addToArray(id: number){
    let index = this.bookArr.findIndex(element => element.id === id);
    console.log('Index ' + index);

    if(index === -1){
      //console.log('findIndex ' + variabla);
      this.bookArr.push({id});
      console.log('After push: ' + this.bookArr)  
      //this.bookArr.splice(variabla);
    }
    else{
      this.bookArr.splice(index,1);
      console.log('After slice: ' + this.bookArr)
    }
  }
}
