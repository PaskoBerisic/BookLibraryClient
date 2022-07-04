import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.css']
})
export class UserBasketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
