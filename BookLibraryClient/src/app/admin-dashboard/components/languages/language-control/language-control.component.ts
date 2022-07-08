import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-language-control',
  templateUrl: './language-control.component.html',
  styleUrls: ['./language-control.component.css']
})
export class LanguageControlComponent implements OnInit {
  languages: Language[] = [];
  books: undefined;
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Admin/Language')
    .subscribe((languages: any) => {
      this.languages = languages;
      console.log(this.languages);
    })
  }
  
  deleteLanguage(id: any){
    this.bookLibraryService.deleteItem('Admin/Language/', id);
    window.location.reload();
  }

}
