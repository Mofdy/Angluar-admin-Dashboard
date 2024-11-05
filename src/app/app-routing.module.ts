import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { userguardGuard } from './demo/guards/userguard.guard';
import { FoodComponent } from './theme/shared/components/food/food.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [userguardGuard],
    children: [
      { path: '',redirectTo: '/default',pathMatch: 'full',  },
      { path: 'default',loadComponent: () => import('./demo/default/default.component').then((c) => c.DefaultComponent) },
      { path: 'food',component:FoodComponent},
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
