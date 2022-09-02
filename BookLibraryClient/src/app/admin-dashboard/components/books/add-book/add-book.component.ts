import { Component, OnInit,} from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { Book } from 'src/app/models/book.model';
import { Genre } from 'src/app/models/genre.model';
import { Language } from 'src/app/models/language.model';
import { Publisher } from 'src/app/models/publisher.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = {}
  languages: Language[] = [];
  genres: Genre[] = [];
  publishers: Publisher[] = [];
  authors: Author[] = [];

  authorId: any;
  genreId: any;

  authorArr: any[] = [];
  genreArr: any[] = [];

  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('General/Languages')
    .subscribe((languages: any) => {
      this.languages = languages;
    })
    this.bookLibraryService.getItems('General/Genres')
    .subscribe((genres: any) => {
      this.genres = genres;
    })
    this.bookLibraryService.getItems('General/Publishers')
    .subscribe((publishers: any) => {
      this.publishers = publishers;
    }) 
    this.bookLibraryService.getItems('Author')
    .subscribe((authors: any) => {
      this.authors = authors;
    })
  }
  
  addBook(book: Book){
    book.authorIds = this.authorArr;
    book.genreIds = this.genreArr;
    this.bookLibraryService.postItem('Books',book);
  }

  addLanguage(id: number){
    this.book.languageId= id;
  }
  addPublisher(id: number){
    this.book.publisherId = id;
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
}
