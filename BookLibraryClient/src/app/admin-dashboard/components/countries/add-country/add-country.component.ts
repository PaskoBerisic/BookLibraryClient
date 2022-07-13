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
  authors: Author[] = [];
  authorId: any;
  
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Author')
    .subscribe((authors: any) => {
      this.authors = authors;
    })
  }
  addCountry(country: Country){
    this.bookLibraryService.postItem('Admin/Country', country);
    console.log(country);
  }
  addAuthor(id: number){
    this.authorId = id;
  }

}
