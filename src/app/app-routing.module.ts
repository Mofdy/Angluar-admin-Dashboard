import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { userguardGuard } from './demo/guards/userguard.guard';
// import LoginComponent from './demo/pages/authentication/login/login.component';
import { FoodComponent } from './theme/shared/components/food/food.component';
import { FoodDetailComponent } from './theme/shared/components/foodDetails/food-detail/food-detail.component';
<<<<<<< HEAD
=======
import { AddFoodComponent } from './theme/shared/components/add-food/add-food.component';
import { OfferDetailsComponent } from './theme/shared/components/offer-details/offer-details.component';
import { AddOfferComponent } from './theme/shared/components/add-offer/add-offer.component';
<<<<<<< HEAD
>>>>>>> e97af9489d50b1afe95651e5f82a9c93094e0024
=======
>>>>>>> a106999f35b3e896432dc6b289671898d769c2a9

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [userguardGuard],
    children: [
      { path: '',redirectTo: '/default',pathMatch: 'full',  },
      { path: 'default',loadComponent: () => import('./demo/default/default.component').then((c) => c.DefaultComponent) },
      { path: 'food',component:FoodComponent},
      { path: 'food-Detail/:id', component: FoodDetailComponent },
      {path:'food-Detail',component:FoodDetailComponent},
<<<<<<< HEAD
      // loadComponent: () => import('./theme/shared/components/food/food.component').then((c) => c.FoodComponent)
      // { path: 'login', component: LoginComponent ,}
=======
      { path: 'add-food', component: AddFoodComponent},
      {path: 'add-offer', component: AddOfferComponent},
      { path: 'offer-Details/:id', component: OfferDetailsComponent },
      { path: 'offer-Details', component: OfferDetailsComponent },
>>>>>>> e97af9489d50b1afe95651e5f82a9c93094e0024

      
      // loadComponent: () => import('./theme/shared/components/food/food.component').then((c) => c.FoodComponent)
      
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'guest',loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
