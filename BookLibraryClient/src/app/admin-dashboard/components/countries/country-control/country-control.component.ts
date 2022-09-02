import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-country-control',
  templateUrl: './country-control.component.html',
  styleUrls: ['./country-control.component.css']
})
export class CountryControlComponent implements OnInit {
  countries: Country[] = [];
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('General/Countries')
  .subscribe((countries: any) => {
    this.countries = countries;
    console.log(this.countries);
  });
  }
  deleteCountry(id: any){
    this.bookLibraryService.deleteItem('General/Countries/', id);
  }
}
