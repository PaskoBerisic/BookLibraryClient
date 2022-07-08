import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-order-control',
  templateUrl: './order-control.component.html',
  styleUrls: ['./order-control.component.css']
})
export class OrderControlComponent implements OnInit {
  orders: Order[] = [];
  books: undefined;
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Order')
    .subscribe((orders: any) => {
      this.orders = orders;
      console.log(this.orders);
    })
  }
  
  deleteOrder(id: any){
    this.bookLibraryService.deleteItem('Order/', id);
    window.location.reload();
  }

}
