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
  
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
    });
    this.bookLibraryService.getItems('Admin/Country')
    .subscribe((countries: any) => {
      this.countries = countries;
    });
  }
  addAuthor(author: Author){
    this.bookLibraryService.postItem('Author', author);
    console.log(author);
  }
  addBooks(id: number){
    this.booksId = id;
  }
  addCountry(id: number){
    this.author.countryId = id;
  }

}
