import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { userguardGuard } from './demo/guards/userguard.guard';
// import LoginComponent from './demo/pages/authentication/login/login.component';
import { FoodComponent } from './theme/shared/components/food/food.component';
import { FoodDetailComponent } from './theme/shared/components/foodDetails/food-detail/food-detail.component';
import { AddFoodComponent } from './theme/shared/components/add-food/add-food.component';

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
      { path: 'add-food', component: AddFoodComponent},
      
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
