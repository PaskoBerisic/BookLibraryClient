import { Component, OnInit } from '@angular/core';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-get-country',
  templateUrl: './get-country.component.html',
  styleUrls: ['./get-country.component.css']
})
export class GetCountryComponent implements OnInit {
  countries: any[] = [];
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Admin/Country')
  .subscribe((countries: any) => {
    this.countries = countries;
    console.log(this.countries);
  });
  }
  deleteCountry(id: any){
    this.bookLibraryService.deleteItem('Admin/Country/', id);
    console.log(this.bookLibraryService.deleteItem('Admin/Country/', id));
    //window.location.reload();
  }
}
