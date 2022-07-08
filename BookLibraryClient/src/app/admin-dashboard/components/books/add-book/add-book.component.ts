import { Component, OnInit,OnChanges, SimpleChanges} from '@angular/core';
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
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Admin/Language')
    .subscribe((languages: any) => {
      this.languages = languages;
    })
    this.bookLibraryService.getItems('Admin/Genre')
    .subscribe((genres: any) => {
      this.genres = genres;
    })
    this.bookLibraryService.getItems('Admin/Publisher')
    .subscribe((publishers: any) => {
      this.publishers = publishers;
    }) 
  }
  ngOnChanges(changes: SimpleChanges): void{

  }
  addBook(book: Book){
    this.bookLibraryService.postItem('Book', book);
    console.log(book);
  }
  addLanguage(id: number){
  }
  addGenre(id: number){
  }
  addPublisher(id: number){
  }
}
