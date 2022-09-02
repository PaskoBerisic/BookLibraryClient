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
    
  }
  addToArray(id: any){
    let index = this.orderArr.findIndex((element:any) => element === id);

    if(index === -1){
      this.orderArr.push(id);
    }
    else{
      this.orderArr.splice(index,1);
    } 
   }
  
  addUser(user: User){
    this.bookLibraryService.postItem('Users', user);
}
}