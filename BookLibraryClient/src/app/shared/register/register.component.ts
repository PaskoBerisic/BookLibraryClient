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
    // const { firstName, lastName, username, password, dateOfBirth, address, role=2, isActive=true } = this.form;

    // this.authService.register(firstName!, lastName!, username!, password!, dateOfBirth!, address!, role, isActive!).subscribe({
    //   next: data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //     alert("Success");
    //   },
    //   error: err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //     alert("Error");
    //   }
    // });
    this.user.isActive = true;
    this.user.role = 2;
    this.bookLibraryService.postItem('Admin/Users', this.user);
    console.log(this.user);
  }
}
