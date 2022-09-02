import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddBookComponent } from './admin-dashboard/components/books/add-book/add-book.component';
import { BookControlComponent } from './admin-dashboard/components/books/book-control/book-control.component';
import { AddCountryComponent } from './admin-dashboard/components/countries/add-country/add-country.component';
import { EditBookComponent } from './admin-dashboard/components/books/edit-book/edit-book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthorControlComponent } from './admin-dashboard/components/authors/author-control/author-control.component';
import { AddAuthorComponent } from './admin-dashboard/components/authors/add-author/add-author.component';
import { EditAuthorComponent } from './admin-dashboard/components/authors/edit-author/edit-author.component';
import { GenreControlComponent } from './admin-dashboard/components/genres/genre-control/genre-control.component';
import { AddGenreComponent } from './admin-dashboard/components/genres/add-genre/add-genre.component';
import { EditGenreComponent } from './admin-dashboard/components/genres/edit-genre/edit-genre.component';
import { LanguageControlComponent } from './admin-dashboard/components/languages/language-control/language-control.component';
import { AddLanguageComponent } from './admin-dashboard/components/languages/add-language/add-language.component';
import { EditLanguageComponent } from './admin-dashboard/components/languages/edit-language/edit-language.component';
import { OrderControlComponent } from './admin-dashboard/components/orders/order-control/order-control.component';
import { AddOrderComponent } from './admin-dashboard/components/orders/add-order/add-order.component';
import { EditOrderComponent } from './admin-dashboard/components/orders/edit-order/edit-order.component';
import { AvailableBooksComponent } from './user-dashboard/components/available-books/available-books.component';
import { LastRentalsComponent } from './user-dashboard/components/last-rentals/last-rentals.component';
import { NewArrivalsComponent } from './user-dashboard/components/new-arrivals/new-arrivals.component';
import { TopRentalsComponent } from './user-dashboard/components/top-rentals/top-rentals.component';
import { UserBasketComponent } from './user-dashboard/components/user-basket/user-basket.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserPaymentInfoComponent } from './user-dashboard/components/user-basket/user-payment-info/user-payment-info.component';
import { UserOrderCompleteComponent } from './user-dashboard/components/user-basket/user-order-complete/user-order-complete.component';
import { PublisherControlComponent } from './admin-dashboard/components/publishers/publisher-control/publisher-control.component';
import { AddPublisherComponent } from './admin-dashboard/components/publishers/add-publisher/add-publisher.component';
import { EditPublisherComponent } from './admin-dashboard/components/publishers/edit-publisher/edit-publisher.component';
import { UserControlComponent } from './admin-dashboard/components/user/user-control/user-control.component';
import { AddUserComponent } from './admin-dashboard/components/user/add-user/add-user.component';
import { EditUserComponent } from './admin-dashboard/components/user/edit-user/edit-user.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { AuthGuard2Service } from './services/auth-guard2.service';
import { RoleGuardService } from './services/role-guard.service';
import { CountryControlComponent } from './admin-dashboard/components/countries/country-control/country-control.component';
import { EditCountryComponent } from './admin-dashboard/components/countries/edit-country/edit-country.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user',
    children: [
      { path: '', component: UserDashboardComponent, pathMatch: 'full', canActivate: [AuthGuard2Service]},
      { path: 'availableBooks', component: AvailableBooksComponent, title: 'BookLibrary/AvailableBooks'},
      { path: 'newArrivals', component: NewArrivalsComponent, title: 'BookLibrary/NewArrivals'},
      { path: 'topRentals', component: TopRentalsComponent, title: 'BookLibrary/TopRentals', },
      { path: 'lastRentals', component: LastRentalsComponent, title: 'BookLibrary/LastRentals', canActivate: [AuthGuard2Service]},
      { path: 'userBasket', component: UserBasketComponent, title: 'BookLibrary/UserBasket', canActivate: [AuthGuard2Service]},
      { path: 'paymentInfo', component: UserPaymentInfoComponent},
      { path: 'orderComplete', component: UserOrderCompleteComponent}
    ]
  },
  { path: 'admin',
    children: [
      //Book
      { path: '', component: AdminDashboardComponent, pathMatch: 'full' },
      { path: 'bookControl', component: BookControlComponent},
      { path: 'addbook', component: AddBookComponent},
      { path: 'editbook/:id', component: EditBookComponent},
      //  children: [
      //   { path: ':id', component: DetailedBookComponent },
      //  ]           E X A M P L E
      // },
      //Author
      { path: 'authorControl', component: AuthorControlComponent},
      { path: 'authorControl/addAuthor', component: AddAuthorComponent},
      { path: 'authorControl/updateAuthor/:id', component: EditAuthorComponent},
      //Country  
      { path: 'countryControl', component: CountryControlComponent},
      { path: 'countryControl/addCountry', component: AddCountryComponent},
      { path: 'countryControl/updateCountry/:id', component: EditCountryComponent},
      //Genre  
      { path: 'genreControl', component: GenreControlComponent},
      { path: 'genreControl/addGenre', component: AddGenreComponent},
      { path: 'genreControl/updateGenre/:id', component: EditGenreComponent},
      //Language  
      { path: 'languageControl', component: LanguageControlComponent},
      { path: 'languageControl/addLanguage', component: AddLanguageComponent},
      { path: 'languageControl/updateLanguage/:id', component: EditLanguageComponent},
      //Order  
      { path: 'orderControl', component: OrderControlComponent},
      { path: 'orderControl/addOrder', component: AddOrderComponent},
      { path: 'orderControl/updateOrder/:id', component: EditOrderComponent},
      //Publisher  
      { path: 'publisherControl', component: PublisherControlComponent},
      { path: 'publisherControl/addPublisher', component: AddPublisherComponent},
      { path: 'publisherControl/updatePublisher/:id', component: EditPublisherComponent},
      //User
      { path: 'userControl', component: UserControlComponent},
      { path: 'userControl/addUser', component: AddUserComponent},
      { path: 'userControl/updateUser/:id', component: EditUserComponent},
    ],
    canActivate: [RoleGuardService] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
