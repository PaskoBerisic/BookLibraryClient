import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BookDetailComponent } from './admin-dashboard/book-detail/book-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAvailableBooksComponent } from './admin-dashboard/components/books/admin-available-books/admin-available-books.component';
import { DetailedBookComponent } from './admin-dashboard/components/books/detailed-book/detailed-book.component';
import { AddBookComponent } from './admin-dashboard/components/books/add-book/add-book.component';
import { BookControlComponent } from './admin-dashboard/components/books/book-control/book-control.component';
import { EditBookComponent } from './admin-dashboard/components/books/edit-book/edit-book.component';
import { AddCountryComponent } from './admin-dashboard/components/countries/add-country/add-country.component';
import { UpdateCountryComponent } from './admin-dashboard/components/countries/update-country/update-country.component';
import { GetCountryComponent } from './admin-dashboard/components/countries/get-country/get-country.component';
import { AuthorControlComponent } from './admin-dashboard/components/authors/author-control/author-control.component';
import { EditAuthorComponent } from './admin-dashboard/components/authors/edit-author/edit-author.component';
import { AddAuthorComponent } from './admin-dashboard/components/authors/add-author/add-author.component';
import { GenreControlComponent } from './admin-dashboard/components/genres/genre-control/genre-control.component';
import { AddGenreComponent } from './admin-dashboard/components/genres/add-genre/add-genre.component';
import { EditGenreComponent } from './admin-dashboard/components/genres/edit-genre/edit-genre.component';
import { LanguageControlComponent } from './admin-dashboard/components/languages/language-control/language-control.component';
import { AddLanguageComponent } from './admin-dashboard/components/languages/add-language/add-language.component';
import { EditLanguageComponent } from './admin-dashboard/components/languages/edit-language/edit-language.component';
import { OrderControlComponent } from './admin-dashboard/components/orders/order-control/order-control.component';
import { AddOrderComponent } from './admin-dashboard/components/orders/add-order/add-order.component';
import { EditOrderComponent } from './admin-dashboard/components/orders/edit-order/edit-order.component';
import { RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AvailableBooksComponent } from './user-dashboard/components/available-books/available-books.component';
import { LastRentalsComponent } from './user-dashboard/components/last-rentals/last-rentals.component';
import { NewArrivalsComponent } from './user-dashboard/components/new-arrivals/new-arrivals.component';
import { TopRentalsComponent } from './user-dashboard/components/top-rentals/top-rentals.component';
import { UserBasketComponent } from './user-dashboard/components/user-basket/user-basket.component';
import { UserPaymentInfoComponent } from './user-dashboard/components/user-basket/user-payment-info/user-payment-info.component';
import { UserOrderCompleteComponent } from './user-dashboard/components/user-basket/user-order-complete/user-order-complete.component';
import { LandingComponent } from './shared/landing/landing.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatMenuModule } from '@angular/material/menu';
import { PublisherControlComponent } from './admin-dashboard/components/publishers/publisher-control/publisher-control.component';
import { AddPublisherComponent } from './admin-dashboard/components/publishers/add-publisher/add-publisher.component';
import { EditPublisherComponent } from './admin-dashboard/components/publishers/edit-publisher/edit-publisher.component';
import { AddUserComponent } from './admin-dashboard/components/user/add-user/add-user.component';
import { UserControlComponent } from './admin-dashboard/components/user/user-control/user-control.component';
import { EditUserComponent } from './admin-dashboard/components/user/edit-user/edit-user.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminDashboardComponent,
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
    AuthorControlComponent,
    EditAuthorComponent,
    AddAuthorComponent,
    GenreControlComponent,
    AddGenreComponent,
    EditGenreComponent,
    LanguageControlComponent,
    AddLanguageComponent,
    EditLanguageComponent,
    OrderControlComponent,
    AddOrderComponent,
    EditOrderComponent,
    UserDashboardComponent,
    AvailableBooksComponent,
    LastRentalsComponent,
    NewArrivalsComponent,
    TopRentalsComponent,
    UserBasketComponent,
    UserPaymentInfoComponent,
    UserOrderCompleteComponent,
    LandingComponent,
    FooterComponent,
    SidebarComponent,
    PublisherControlComponent,
    AddPublisherComponent,
    EditPublisherComponent,
    AddUserComponent,
    UserControlComponent,
    EditUserComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
