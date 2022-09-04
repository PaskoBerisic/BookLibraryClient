import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLogged: any;
  isAdminLogged: any;
  user: User = {};

  constructor(public formBuilder: FormBuilder, private storageService: StorageService,private bookLibraryService: BookLibraryService) { }
  ngOnInit(): void {
    this.isAdminLogged = this.storageService.isAdminLoggedIn();
    this.isLogged = this.storageService.isLoggedIn();
  
    if(this.isAdminLogged || this.isLogged){
      let id = this.storageService.getUser().id;
      this.getUser(id);
    }
  }

  getUser(id: string) {
    this.bookLibraryService.getItemByID('Users/', id)
      .subscribe((user: any) => {
        this.user = user;
        console.log(this.user);
      });
  }
}
