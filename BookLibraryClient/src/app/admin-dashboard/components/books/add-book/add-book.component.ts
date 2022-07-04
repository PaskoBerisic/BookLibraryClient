import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = {}
  constructor() { }

  ngOnInit(): void {
  }

}
