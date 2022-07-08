import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Location } from '@angular/common';

const API_URL = "https://localhost:44323/api/";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  currentUser: User = {};

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute,
    private location: Location,
    private bookLibraryService: BookLibraryService
    ) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params["id"]);
    console.log(this.currentUser);
  }

     getUser(id: string){
      this.http.get(API_URL + 'Admin/User/' + id)
      .subscribe((user: any) => {
        this.currentUser = user;
        console.log(this.currentUser);
      }); 
    }
    updateUser(user: User){
      this.bookLibraryService.putItem('Admin/User', user);
    }

    deleteUser(user: User){
    }
    goBack(): void {
      this.location.back();
    }
}