import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  order: Order = {};
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
  }
  addOrder(order: Order){
    this.bookLibraryService.postItem('Admin/Order', order);
    console.log(order);
  }
}
