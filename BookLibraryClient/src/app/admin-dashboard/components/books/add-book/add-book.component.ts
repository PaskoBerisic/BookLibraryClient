import { Component, OnInit,OnChanges, SimpleChanges} from '@angular/core';
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
export class AddBookComponent implements OnInit, OnChanges {
  book: Book = {}
  languages: Language[] = [];
  genres: Genre[] = [];
  publishers: Publisher[] = [];
  authors: Author[] = [];
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Admin/Language')
    .subscribe((languages: any) => {
      this.languages = languages;
      console.log(this.languages);
    })
    this.bookLibraryService.getItems('Admin/Genre')
    .subscribe((genres: any) => {
      this.genres = genres;
      console.log(this.genres);
    })
    this.bookLibraryService.getItems('Admin/Publisher')
    .subscribe((publishers: any) => {
      this.publishers = publishers;
      console.log(this.publishers);
    }) 
    this.bookLibraryService.getItems('Author')
    .subscribe((authors: any) => {
      this.authors = authors;
      console.log(this.authors);
    })
  }
  ngOnChanges(changes: SimpleChanges): void{

  }
  addBook(book: Book){
    this.bookLibraryService.postItem('Book', book);
    console.log(book);
  }
  addAuthor(id: number){
    this.book.authors.id = id;
  }
  addLanguage(id: number){
    this.book.languageId= id;
  }
  addGenre(id: number){
    this.book.genres.id = id;
  }
  addPublisher(id: number){
    this.book.publisherId = id;
  }
}
