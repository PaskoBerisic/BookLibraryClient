import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bookCounter: number = 0;
  bookCounterStop: any = setInterval(()=>{
    this.bookCounter++;
    if(this.bookCounter === 180){
      clearInterval(this.bookCounterStop);
    }
  },60)
  
  hourCounter: number = 0;
  hourCounterStop: any = setInterval(()=>{
    this.hourCounter++;
    if(this.hourCounter === 2540){
      clearInterval(this.hourCounterStop);
    }
  },1)
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  register(){
    this.router.navigate(['/register'])
  }
  
  login(){
    this.router.navigate(['/login'])
  }

}
