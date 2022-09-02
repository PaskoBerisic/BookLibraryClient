import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { Author } from 'src/app/models/author.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Location } from '@angular/common';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  currentAuthor: Author = {};
  books: Book[] = [];
  bookArr: any[] = [];

  constructor(private route: ActivatedRoute, private location: Location, private bookLibraryService: BookLibraryService) { }
  ngOnInit(): void {
    this.getAuthor(this.route.snapshot.params["id"]);
    this.bookLibraryService.getItems('Books')
      .subscribe((books: any) => {
        this.books = books;
      });
  }

  getAuthor(id: string) {
    this.bookLibraryService.getItemByID('Author/', id)
      .subscribe((author: any) => {
        this.currentAuthor = author;
        console.log(this.currentAuthor);
      });
  }

  addToArray(id: number) {
    let index = this.bookArr.findIndex(element => element === id);

    if (index === -1) {
      this.bookArr.push(id);
    }
    else {
      this.bookArr.splice(index, 1);
    }
  }

  updateAuthor(author: Author) {
    author.countryId = this.currentAuthor.country.id;
    author.bookIds = this.bookArr;
    this.bookLibraryService.putItem('Author', author);
  }

  deleteAuthor(author: Author) {
    this.bookLibraryService.deleteItem('Author/', author.id);
  }

  goBack(): void {
    this.location.back();
  }
}
