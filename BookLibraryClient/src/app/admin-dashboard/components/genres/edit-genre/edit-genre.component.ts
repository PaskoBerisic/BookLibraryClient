import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Location } from '@angular/common';
import { Genre } from 'src/app/models/genre.model';

const API_URL = "https://localhost:44323/api/";

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {
 
  currentGenre: Genre = {};

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute,
    private location: Location,
    private bookLibraryService: BookLibraryService
    ) { }

  ngOnInit(): void {
    this.getGenre(this.route.snapshot.params["id"]);
    console.log('THS' + this.currentGenre);
  }

     getGenre(id: string){
      this.http.get(API_URL + 'Admin/Genre/' + id)
      .subscribe((genre: any) => {
        this.currentGenre = genre;
        console.log(this.currentGenre);
      }); 
    }
    updateGenre(genre: Genre){
      this.bookLibraryService.putItem('Admin/Genre', genre);
    }

    deleteGenre(genre: Genre){


    }
    goBack(): void {
      this.location.back();
    }


}
