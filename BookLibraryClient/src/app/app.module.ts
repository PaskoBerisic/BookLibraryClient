import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LastRentalsComponent } from './User/last-rentals/last-rentals.component';
import { NewArrivalsComponent } from './User/new-arrivals/new-arrivals.component';
import { TopRentalsComponent } from './User/top-rentals/top-rentals.component';
import { UserBasketComponent } from './User/user-basket/user-basket.component';
import { UserBasketPaymentInfoComponent } from './User/user-basket/user-basket-payment-info/user-basket-payment-info.component';
import { UserBasketOrderCompleteComponent } from './User/user-basket/user-basket-order-complete/user-basket-order-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    LastRentalsComponent,
    NewArrivalsComponent,
    TopRentalsComponent,
    UserBasketComponent,
    UserBasketPaymentInfoComponent,
    UserBasketOrderCompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
