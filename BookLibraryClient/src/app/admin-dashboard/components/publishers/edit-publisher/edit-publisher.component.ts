import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publisher } from 'src/app/models/publisher.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Location } from '@angular/common';

const API_URL = "https://localhost:44323/api/";

@Component({
  selector: 'app-edit-publisher',
  templateUrl: './edit-publisher.component.html',
  styleUrls: ['./edit-publisher.component.css']
})
export class EditPublisherComponent implements OnInit {

  currentPublisher: Publisher = {};

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute,
    private location: Location,
    private bookLibraryService: BookLibraryService
    ) { }

  ngOnInit(): void {
    this.getPublisher(this.route.snapshot.params["id"]);
    console.log(this.currentPublisher);
  }

     getPublisher(id: string){
      this.http.get(API_URL + 'Admin/Publisher/' + id)
      .subscribe((publisher: any) => {
        this.currentPublisher = publisher;
        console.log(this.currentPublisher);
      }); 
    }
    updatePublisher(publisher: Publisher){
      this.bookLibraryService.putItem('Admin/Publisher', publisher);
    }

    deletePublisher(publisher: Publisher){
    }
    goBack(): void {
      this.location.back();
    }
}
