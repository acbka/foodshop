import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DishesComponent } from './dishes/dishes.component';
import { PopularComponent } from './popular/popular.component';
import { OrderComponent } from './order/order.component';
import { ReadyComponent } from './ready/ready.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'user', component: UserComponent },
   { path: 'dishes/:category',   component: DishesComponent },
   { path: 'order', component: OrderComponent },
   { path: 'ready', component: ReadyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
