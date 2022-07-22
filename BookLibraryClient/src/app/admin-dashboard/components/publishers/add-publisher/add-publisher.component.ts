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
  books: Book[] = [];
  booksId:any;
  bookArr: any = [];
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Book')
    .subscribe((books: any) => {
      this.books = books;
      console.log(this.books);
    });
  }
  addPublisher(publisher: Publisher){
    publisher.books = this.bookArr;
    this.bookLibraryService.postItem('Admin/Publishers', publisher);
    console.log(publisher);
  }
  addToArray(id: number){
    let index = this.bookArr.findIndex(element => element.id === id);
    console.log('Index ' + index);

    if(index === -1){
      //console.log('findIndex ' + variabla);
      this.bookArr.push({id});
      console.log('After push: ' + this.bookArr)  
      //this.bookArr.splice(variabla);
    }
    else{
      this.bookArr.splice(index,1);
      console.log('After slice: ' + this.bookArr)
    }
  }
  addBooks(id: number){
    this.booksId = id;
  }

}
