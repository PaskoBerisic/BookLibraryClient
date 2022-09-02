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
  bookArr: any[] = [];
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Books')
    .subscribe((books: any) => {
      this.books = books;
    });
  }
  
  addGenre(genre: Genre){
    genre.bookIds = this.bookArr;
    this.bookLibraryService.postItem('General/Genres', genre);
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
}
