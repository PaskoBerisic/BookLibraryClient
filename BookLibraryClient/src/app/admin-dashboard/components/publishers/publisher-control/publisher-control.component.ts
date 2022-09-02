import { Component, OnInit } from '@angular/core';
import { Publisher } from 'src/app/models/publisher.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-publisher-control',
  templateUrl: './publisher-control.component.html',
  styleUrls: ['./publisher-control.component.css']
})
export class PublisherControlComponent implements OnInit {
  publishers: Publisher[] = [];
  books: undefined;
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('General/Publishers')
    .subscribe((publishers: any) => {
      this.publishers = publishers;
      console.log(this.publishers);
    })
  }
  
  deletePublisher(id: any){
    this.bookLibraryService.deleteItem('General/Publishers/', id);
  }

}
