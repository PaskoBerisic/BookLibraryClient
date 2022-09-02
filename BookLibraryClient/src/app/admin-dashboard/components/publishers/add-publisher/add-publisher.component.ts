import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Publisher } from 'src/app/models/publisher.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent implements OnInit {
  publisher: Publisher = {};
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
  }

  addPublisher(publisher: Publisher){
    this.bookLibraryService.postItem('General/Publishers', publisher);
  }
}
