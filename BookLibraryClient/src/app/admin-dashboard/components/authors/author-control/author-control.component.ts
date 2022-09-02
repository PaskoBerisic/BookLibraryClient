import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-author-control',
  templateUrl: './author-control.component.html',
  styleUrls: ['./author-control.component.css']
})
export class AuthorControlComponent implements OnInit {
  authors: Author[] = [];
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Author')
    .subscribe((authors: any) => {
      this.authors = authors;
      console.log(this.authors);
    })
  }
  
  deleteAuthor(id: any){
    this.bookLibraryService.deleteItem('Author/', id);
  }
}
