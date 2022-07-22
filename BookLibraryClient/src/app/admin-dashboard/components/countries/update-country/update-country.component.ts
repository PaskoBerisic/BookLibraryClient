import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
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
  status: any = ' a';
  constructor(private http: HttpClient, 
    private location: Location,
     private route: ActivatedRoute,
     private bookLibraryService: BookLibraryService) { }
     postId: any;
  ngOnInit(): void {
    this.getCountry(this.route.snapshot.params["id"]);
  }

  getCountry(id: string){
    this.http.get(API_URL + 'Admin/Countries/' + id)
    .subscribe((country: any) => {
      this.currentCountry = country;
      console.log(this.currentCountry.vat);
    }); 
  }
  updateCountry(country: any){
    this.bookLibraryService.putItem('Admin/Countries/', country)
    console.log(country);
  }

  deleteCountry(id: number){
    this.bookLibraryService.deleteItem('Admin/Countries/', id);
  }
  goBack(): void {
    this.location.back();
  }
}
