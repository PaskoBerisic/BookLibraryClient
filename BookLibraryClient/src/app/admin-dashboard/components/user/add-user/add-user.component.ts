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
    });
  }
  addToArray(id: any){
    // {} needed for working collection insert
    let index = this.orderArr.findIndex(element => element.id === id);
    console.log('Index ' + index);

    if(index === -1){
      //console.log('findIndex ' + variabla);
      this.orderArr.push({id});
      console.log('After push: ' + this.orderArr)  
      //this.orderArr.splice(variabla);
    }
    else{
      this.orderArr.splice(index,1);
      console.log('After slice: ' + this.orderArr)
    } 
  }
  
  addUser(user: User){
    user.orders = this.orderArr;
    this.bookLibraryService.postItem('Admin/Users', user);
    console.log(user);
}

}


// let tempArr = [...this.orderArr]
//       const index = tempArr.findIndex((element) => element === id)
//       if(index !== -1){
//         this.orderArr.splice(index, 1)
//         console.log(this.orderArr);
//       }
//       else{
//         this.orderArr.push(id);
//         console.log(this.orderArr);    
//       }