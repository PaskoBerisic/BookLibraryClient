import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
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
    this.bookLibraryService.postItem('General/Languages', language);
  }
}
