import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {
  language: Language = {};
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
  }
  addLanguage(language: Language){
    this.bookLibraryService.postItem('Admin/Language', language);
    console.log(language);
  }

}
