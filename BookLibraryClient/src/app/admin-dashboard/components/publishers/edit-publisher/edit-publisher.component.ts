import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publisher } from 'src/app/models/publisher.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Location } from '@angular/common';
import { Book } from 'src/app/models/book.model';

const API_URL = "https://localhost:44323/api/";

@Component({
  selector: 'app-edit-publisher',
  templateUrl: './edit-publisher.component.html',
  styleUrls: ['./edit-publisher.component.css']
})
export class EditPublisherComponent implements OnInit {
  currentPublisher: Publisher = {};
  books: Book[] = [];
  bookArr: Book[] = [];

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute,
    private location: Location,
    private bookLibraryService: BookLibraryService
    ) { }

  ngOnInit(): void {
    this.getPublisher(this.route.snapshot.params["id"]);
    console.log(this.currentPublisher);
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
    });
  }
  getPublisher(id: string){
    this.http.get(API_URL + 'Admin/Publishers/' + id)
      .subscribe((publisher: any) => {
      this.currentPublisher = publisher;
      console.log(this.currentPublisher);
    }); 
  }
  addToArray(id: number){
    this.bookArr.push({id});
    console.log(this.bookArr);
  }
  updatePublisher(publisher: Publisher){
    publisher.books = this.bookArr;
    this.bookLibraryService.putItem('Admin/Publishers', publisher);
  }
  deletePublisher(publisher: Publisher){
  }

  goBack(): void {
    this.location.back();
  }
}
