import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AvailableBooksComponent } from './User/available-books/available-books.component';
import { LastRentalsComponent } from './User/last-rentals/last-rentals.component';
import { NewArrivalsComponent } from './User/new-arrivals/new-arrivals.component';
import { TopRentalsComponent } from './User/top-rentals/top-rentals.component';
import { UserBasketOrderCompleteComponent } from './User/user-basket/user-basket-order-complete/user-basket-order-complete.component';
import { UserBasketPaymentInfoComponent } from './User/user-basket/user-basket-payment-info/user-basket-payment-info.component';
import { UserBasketComponent } from './User/user-basket/user-basket.component';
const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'user', component: UserDashboardComponent},
  {path: 'user/all', component: AvailableBooksComponent},
  {path: 'user/lastRental', component: LastRentalsComponent},
  {path: 'user/newArrivals', component: NewArrivalsComponent},
  {path: 'user/topRentals', component: TopRentalsComponent},
  {path: 'user/userBasket', component: UserBasketComponent},
  {path: 'user/userBasket/paymentInfo', component: UserBasketPaymentInfoComponent},
  {path: 'user/userBasket/orderComplete', component: UserBasketOrderCompleteComponent},


  {path: 'admin', component:AdminDashboardComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
