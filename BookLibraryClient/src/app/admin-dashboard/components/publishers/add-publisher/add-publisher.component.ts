import { Component, OnInit } from '@angular/core';
import { Publisher } from 'src/app/models/publisher.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent implements OnInit {
  publisher: Publisher = {};
  books: any[]=[];
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
      console.log(this.books);
    });
  }
  addPublisher(publisher: Publisher){
    this.bookLibraryService.postItem('Admin/Publisher', publisher);
    console.log(publisher);
  }
  addBook(id: any){
    console.log(id);
    this.publisher.books = id;
    console.log(this.publisher.books);
  }

}
