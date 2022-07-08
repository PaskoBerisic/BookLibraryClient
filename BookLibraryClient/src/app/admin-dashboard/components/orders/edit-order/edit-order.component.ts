import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { Location } from '@angular/common';
import { BookLibraryService } from 'src/app/services/book-library.service';
const API_URL = "https://localhost:44323/api/";


@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  
  currentOrder: Order = {};

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute,
    private location: Location,
    private bookLibraryService: BookLibraryService
    ) { }

  ngOnInit(): void {
    this.getOrder(this.route.snapshot.params["id"]);
    console.log(this.currentOrder);
  }

     getOrder(id: string){
      this.http.get(API_URL + 'Order/' + id)
      .subscribe((order: any) => {
        this.currentOrder = order;
        console.log(this.currentOrder);
      }); 
    }
    updateOrder(order: Order){
      this.bookLibraryService.putItem('Order', order);
    }

    deleteOrder(order: Order){
    }
    goBack(): void {
      this.location.back();
    }
}
