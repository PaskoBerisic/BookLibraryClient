import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Location } from '@angular/common';

@Component({
selector: 'app-edit-language',
templateUrl: './edit-language.component.html',
styleUrls: ['./edit-language.component.css']
})
export class EditLanguageComponent implements OnInit {
  currentLanguage: Language = {};

  constructor(private location: Location, private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
  }

  getLanguage(id: string){
    this.bookLibraryService.getItemByID('General/Languages/', id)
      .subscribe((language: any) => {
      this.currentLanguage = language;
      console.log(this.currentLanguage);
    });
  }


  updateLanguage(language: Language){
    this.bookLibraryService.putItem('General/Languages', language);
  }

  deleteLanguage(language: Language){
    this.bookLibraryService.deleteItem('General/Languages/', language.id);
  }

  goBack(): void {
    this.location.back();
  }
}
