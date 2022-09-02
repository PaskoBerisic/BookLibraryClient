import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { Book } from 'src/app/models/book.model';
import { Country } from 'src/app/models/country.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  author: Author = {};
  books: Book[] = [];
  booksId: any;
  countries: Country[] = [];
  countryId: any;
  bookArr: any[] = [];
  
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Books')
    .subscribe((books: any) => {
      this.books = books;
    });
    this.bookLibraryService.getItems('General/Countries')
    .subscribe((countries: any) => {
      this.countries = countries;
    });
  }
  addAuthor(author: Author){
    author.bookIds = this.bookArr;
    this.bookLibraryService.postItem('Author', author);
  }
  addToArray(id: number){
    let index = this.bookArr.findIndex(element => element === id);

    if(index === -1){
      this.bookArr.push(id);
    }
    else{
      this.bookArr.splice(index,1);
    }
  }
  addCountry(id: number){
    this.author.countryId = id;
  }
}
