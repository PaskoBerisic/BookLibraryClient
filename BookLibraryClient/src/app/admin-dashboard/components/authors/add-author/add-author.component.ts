import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  author: Author = {};
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
  }
  addAuthor(author: Author){
    this.bookLibraryService.postItem('Author', author);
    console.log(author);
  }

}
