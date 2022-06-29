import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BookDetailComponent } from './admin-dashboard/book-detail/book-detail.component';
import { FormsModule } from '@angular/forms';
import { AdminAvailableBooksComponent } from './admin-dashboard/components/admin-available-books/admin-available-books.component';
import { DetailedBookComponent } from './admin-dashboard/components/detailed-book/detailed-book.component';
import { AddBookComponent } from './admin-dashboard/components/add-book/add-book.component';
import { BookControlComponent } from './admin-dashboard/components/book-control/book-control.component';
import { EditBookComponent } from './admin-dashboard/components/edit-book/edit-book.component';
import { AddCountryComponent } from './admin-dashboard/components/countries/add-country/add-country.component';
import { UpdateCountryComponent } from './admin-dashboard/components/countries/update-country/update-country.component';
import { GetCountryComponent } from './admin-dashboard/components/countries/get-country/get-country.component';

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
    NavbarComponent,
    BookDetailComponent,
    AdminAvailableBooksComponent,
    DetailedBookComponent,
    AddBookComponent,
    BookControlComponent,
    EditBookComponent,
    AddCountryComponent,
    UpdateCountryComponent,
    GetCountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
