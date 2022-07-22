import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})
export class UserControlComponent implements OnInit {
  users: User[] = [];
  books: undefined;
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.bookLibraryService.getItems('Admin/Users')
    .subscribe((users: any) => {
      this.users = users;
      console.log(this.users);
    })
  }
  
  deleteUser(id: any){
    this.bookLibraryService.deleteItem('Admin/Users/', id);
    window.location.reload();
  }

}
