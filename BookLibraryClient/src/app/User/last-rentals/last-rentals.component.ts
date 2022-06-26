import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-rentals',
  templateUrl: './last-rentals.component.html',
  styleUrls: ['./last-rentals.component.css']
})
export class LastRentalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
