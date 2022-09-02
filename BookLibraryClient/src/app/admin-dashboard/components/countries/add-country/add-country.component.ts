import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { Country } from 'src/app/models/country.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  country: Country = {};
  constructor(private bookLibraryService: BookLibraryService) { }
  
  ngOnInit(): void {
    
  }
  addCountry(country: Country){
    this.bookLibraryService.postItem('General/Countries', country);
  }
}
