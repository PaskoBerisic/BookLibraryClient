import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
