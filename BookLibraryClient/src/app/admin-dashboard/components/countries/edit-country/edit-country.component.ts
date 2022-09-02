import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit {
  currentCountry: any = {};
  constructor( 
    private location: Location,
     private route: ActivatedRoute,
     private bookLibraryService: BookLibraryService) { }
     ngOnInit(): void {
      this.getCountry(this.route.snapshot.params["id"]);
    }
  
    getCountry(id: string){
      this.bookLibraryService.getItemByID('General/Countries/', id)
      .subscribe((country: any) => {
        this.currentCountry = country;
        console.log(this.currentCountry);
      }); 
    }

    updateCountry(country: any){
      this.bookLibraryService.putItem('General/Countries', country)
    }
  
    deleteCountry(id: number){
      this.bookLibraryService.deleteItem('General/Countries/', id);
    }
    goBack(): void {
      this.location.back();
    }
}
