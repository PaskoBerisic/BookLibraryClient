import { Component, OnInit } from '@angular/core';
import { Publisher } from 'src/app/models/publisher.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Location } from '@angular/common';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-edit-publisher',
  templateUrl: './edit-publisher.component.html',
  styleUrls: ['./edit-publisher.component.css']
})
export class EditPublisherComponent implements OnInit {
  currentPublisher: Publisher = {};
  books: Book[] = [];
  bookArr: any[] = [];

  constructor(private location: Location, private bookLibraryService: BookLibraryService
    ) { }

  ngOnInit(): void {
  }

  getPublisher(id: string){
    this.bookLibraryService.getItemByID('General/Publishers/', id)
      .subscribe((publisher: any) => {
      this.currentPublisher = publisher;
      console.log(this.currentPublisher);
    }); 
  }

  updatePublisher(publisher: Publisher){
    this.bookLibraryService.putItem('General/Publishers/', publisher);
  }

  deletePublisher(publisher: Publisher){
      this.bookLibraryService.deleteItem('General/Publishers/', publisher.id);  
    }

  goBack(): void {
    this.location.back();
  }
}
