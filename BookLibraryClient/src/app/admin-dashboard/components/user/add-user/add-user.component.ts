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
  tempArr: any = [];
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
    let tempArr = [...this.orderArr]
      const index = tempArr.findIndex((element) => element === id)
      if(index !== -1){
        this.orderArr.splice(index, 1)
        console.log(this.orderArr);
      }
      else{
        this.orderArr.push(id);
        console.log(this.orderArr);    
      }
      //console.log(tempArr);  
      //console.log(this.orderArr);
      
  }
  transferArr(){
    for (let index = 0; index < this.orderArr.length; index++) {
      let id = this.orderArr[index].id;
      //this.tempArr.push({id});
      console.log('OrderApp' + ' ' +  this.orderArr[index].id);
      console.log('Id' + ' ' + this.orderArr[index].id);
      this.tempArr.push({id});
    } 
    console.log('Temp' + ' ' + this.tempArr);
    console.log('Org' +  ' ' + this.orderArr);
    this.orderArr = this.tempArr;
    console.log('Org after change' + ' ' + this.orderArr);

  }
  addUser(user: User){
    //this.transferArr();
    user.orders = this.orderArr;
    this.bookLibraryService.postItem('Admin/User', user);
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