import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { Location } from '@angular/common';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Genre } from 'src/app/models/genre.model';
import { Author } from 'src/app/models/author.model';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  currentBook: any = {};
  genres: Genre[] = [];
  genreArr: any[] = [];
  authors: Author[] = [];
  authorArr: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bookLibraryService: BookLibraryService) { }


  ngOnInit(): void {
    this.getBook(this.route.snapshot.params["id"]);

    this.bookLibraryService.getItems('General/Genres')
    .subscribe((genres: any) => {
      this.genres = genres;
    });

    this.bookLibraryService.getItems('Authors')
    .subscribe((authors: any) => {
      this.authors = authors;
    });

  }

  getBook(id: string) {
    this.bookLibraryService.getItemByID('Books/', id)
    .subscribe((book: any) => {
      this.currentBook = book;
      console.log(this.currentBook);
    });
  }

  updateBook(book: Book) {
    book.languageId = this.currentBook.language.id;
    book.publisherId = this.currentBook.publisher.id;
    book.authorIds = this.authorArr;
    book.genreIds = this.genreArr;
    this.bookLibraryService.putItem('Books', book);
  }

  addToAuthorArray(id: number){
    let index = this.authorArr.findIndex(element => element === id);
  
      if(index === -1){
        this.authorArr.push(id);
      }
      else{
        this.authorArr.splice(index,1);
      }
    }

    addToGenreArray(id: number){
      let index = this.genreArr.findIndex(element => element === id);
  
      if(index === -1){
        this.genreArr.push(id);
      }
      else{
        this.genreArr.splice(index,1);
      }    
    }

  deleteBook(book: Book) { 
    this.bookLibraryService.deleteItem('Books/', book.id);
  }

  goBack(): void {
    this.location.back();
  }
}
