import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Genre } from 'src/app/models/genre.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  books: Book[] = [];
  booksId:any;
  genre: Genre = {};
  
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
    });
  }
  addGenre(genre: Genre){
    this.bookLibraryService.postItem('Admin/Genre', genre);
    console.log(genre);
  }
  addBooks(id: number){
    this.booksId = id;
  }

}
