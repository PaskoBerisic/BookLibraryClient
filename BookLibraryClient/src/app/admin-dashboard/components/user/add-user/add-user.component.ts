import { Component, OnInit} from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = {};
  orders: Order[] = [];
  orderId: any;
  orderArr: any = [];
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Order')
    .subscribe((orders: any) => {
      this.orders = orders;
      console.log(this.orders);
    })
  }
  addToArray(id: number){
    this.orderArr.push({id});
    console.log(this.orderArr);  
  }
  addUser(user: User){
    user.orders = this.orderArr;
    this.bookLibraryService.postItem('Admin/User', user);
    console.log(user);
}

}
