import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = {};
  constructor(private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
  }
  addUser(user: User){
    this.bookLibraryService.postItem('Admin/User', user);
    console.log(user);
}

}
