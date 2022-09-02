import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Location } from '@angular/common';
import { Genre } from 'src/app/models/genre.model';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit { 
  currentGenre: Genre = {};
  books: Book[] = [];
  bookArr: any[] = [];
  constructor(private route: ActivatedRoute, private location: Location, private bookLibraryService: BookLibraryService) { }

    ngOnInit(): void {
      this.getGenre(this.route.snapshot.params["id"]);
      this.bookLibraryService.getItems('Books')
      .subscribe((books: any) => {
        this.books = books;
      });
    }
  
    getGenre(id: string){
      this.bookLibraryService.getItemByID('General/Genres/', id)
        .subscribe((genre: any) => {
          this.currentGenre = genre;
          console.log(this.currentGenre);
        }); 
    }
    updateGenre(genre: Genre){
      genre.bookIds = this.bookArr;
      this.bookLibraryService.putItem('General/Genres', genre);
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
  
    deleteGenre(genre: Genre){
      this.bookLibraryService.deleteItem('General/Genres/', genre.id);
    }
    
    goBack(): void {
      this.location.back();
    }
}
