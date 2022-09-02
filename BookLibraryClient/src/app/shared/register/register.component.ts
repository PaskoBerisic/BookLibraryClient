import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { BookLibraryService } from 'src/app/services/book-library.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    dateOfBirth: undefined,
    address: ''
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.user.isActive = true;
    this.user.role = 2;
    this.bookLibraryService.postItem('Users', this.user);
    console.log(this.user);
  }
}
