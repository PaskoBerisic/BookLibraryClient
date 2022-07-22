import { Component, OnInit } from '@angular/core';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-genre-control',
  templateUrl: './genre-control.component.html',
  styleUrls: ['./genre-control.component.css']
})
export class GenreControlComponent implements OnInit {
  genres: any[] = [];
  books: undefined;
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Admin/Genres')
    .subscribe((genres: any) => {
      this.genres = genres;
      console.log(this.genres);
    })
  }
  
  deleteGenre(id: any){
    this.bookLibraryService.deleteItem('Admin/Genres/', id);
    window.location.reload();
  }

}
