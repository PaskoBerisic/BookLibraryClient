import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Location } from '@angular/common';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  currentUser: User = {};
  orders: Order[] = [];
  orderArr: any [] = [];
  constructor(private route: ActivatedRoute, private location: Location, private bookLibraryService: BookLibraryService) {}

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params["id"]);
    this.bookLibraryService.getItems('Orders')
      .subscribe((orders: any) => {
        this.orders = orders;
      });
  }

  getUser(id: string) {
    this.bookLibraryService.getItemByID('Users/', id)
      .subscribe((user: any) => {
        this.currentUser = user;
        console.log(this.currentUser);
      });
  }

  addToArray(id: number){
    let index = this.orderArr.findIndex(element => element === id);

    if(index === -1){
      this.orderArr.push(id);
    }
    else{
      this.orderArr.splice(index,1);
    }
  }

  updateUser(user: User) {
    this.bookLibraryService.putItem('Users', user);
  }

  deleteUser(user: User) {
    this.bookLibraryService.deleteItem('Users/', user.id);  
  }

  goBack(): void {
    this.location.back();
  }
}
