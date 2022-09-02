import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { Location } from '@angular/common';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  currentOrder: Order = {};
  books: Book[] = [];
  bookArr: any[] = [];
  
  constructor( private route: ActivatedRoute, private location: Location, private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.getOrder(this.route.snapshot.params["id"]);
    console.log(this.currentOrder);
    this.bookLibraryService.getItems('Books')
    .subscribe((books: any) => {
      this.books = books;
    });
  }

  addToArray(id: number){
    let index = this.bookArr.findIndex(element => element === id);
  
      if(index === -1){
        this.bookArr.push(id);
      }
      else{
        this.bookArr.splice(index,1);
      }
    }

  getOrder(id: string){
    this.bookLibraryService.getItemByID('Orders/', id)
      .subscribe((order: any) => {
        this.currentOrder = order;
      }); 
    }
    
  updateOrder(order: Order){
    order.userId = this.currentOrder.user.id;
    order.books = this.bookArr;
    this.bookLibraryService.putItem('Orders', order);
  }

  deleteOrder(order: Order){
    this.bookLibraryService.deleteItem('Orders/', order.id);
  }

  goBack(): void {
    this.location.back();
  }
}
