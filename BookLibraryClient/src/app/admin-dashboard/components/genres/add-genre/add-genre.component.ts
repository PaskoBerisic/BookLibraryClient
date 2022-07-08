import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  genre: Genre = {};
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
  }
  addGenre(genre: Genre){
    this.bookLibraryService.postItem('Admin/Genre', genre);
    console.log(genre);
  }

}
