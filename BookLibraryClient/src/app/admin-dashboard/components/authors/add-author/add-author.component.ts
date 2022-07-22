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
  bookArr: Book[] = [];
  
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
    });
    this.bookLibraryService.getItems('Admin/Countries')
    .subscribe((countries: any) => {
      this.countries = countries;
    });
  }
  addAuthor(author: Author){
    author.books = this.bookArr;
    this.bookLibraryService.postItem('Author', author);
    console.log(author);
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
    }}
  addCountry(id: number){
    this.author.countryId = id;
  }

}
