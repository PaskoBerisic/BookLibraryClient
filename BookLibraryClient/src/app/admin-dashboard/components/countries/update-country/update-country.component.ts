import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookLibraryService } from 'src/app/services/book-library.service';

const API_URL = "https://localhost:44323/api/";


@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent implements OnInit {
  currentCountry: any = {};
  constructor(private http: HttpClient, 
    private location: Location,
     private route: ActivatedRoute,
     private bookLibraryService: BookLibraryService) { }
     postId: any;
  ngOnInit(): void {
    this.getBook(this.route.snapshot.params["id"]);
    console.log('This kec' + this.getBook(this.route.snapshot.params["id"]));
  }

  getBook(id: string){
    this.http.get(API_URL + 'Admin/Country/' + id)
    .subscribe((country: any) => {
      this.currentCountry = country;
      console.log(this.currentCountry.vat);
    }); 
  }
  updateBook(country: any){
    this.bookLibraryService.putItem('Admin/Country/', country)
  }

  deleteBook(){


  }
  goBack(): void {
    this.location.back();
  }
}
