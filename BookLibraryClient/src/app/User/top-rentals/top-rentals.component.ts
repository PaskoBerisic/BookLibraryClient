import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-rentals',
  templateUrl: './top-rentals.component.html',
  styleUrls: ['./top-rentals.component.css']
})
export class TopRentalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
