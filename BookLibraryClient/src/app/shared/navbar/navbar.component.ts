import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  users: User[] = [];
  user: User = {};
  isLogged: any;
  isAdminLogged: any;
  constructor(private router: Router, private storageService: StorageService, private bookLibraryService: BookLibraryService) { }
  
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
  logout(){
    this.storageService.clean();
    //this.router.navigate(['dashboard']);
    window.location.replace('dashboard');
  }
}