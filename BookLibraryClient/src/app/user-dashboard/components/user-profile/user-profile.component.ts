import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; 
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = {};

  constructor(
    private location: Location,
    private bookLibraryService: BookLibraryService,
    private storageService: StorageService  
  ) { }
  ngOnInit(): void {
    let id = this.storageService.getUser().id;
    this.getUser(id);
  }

  getUser(id: string) {
    this.bookLibraryService.getItemByID('Users/', id)
      .subscribe((user: any) => {
        this.user = user;
      });
  }

  updateUser(user: User) {
    this.bookLibraryService.putItem('Users', user);
  }

  goBack(): void {
    this.location.back();
  }

}
