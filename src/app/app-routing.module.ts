import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { userguardGuard } from './demo/guards/userguard.guard';
import LoginComponent from './demo/pages/authentication/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [userguardGuard],
    children: [
      { path: '',redirectTo: '/default',pathMatch: 'full',  },
      { path: 'default',loadComponent: () => import('./demo/default/default.component').then((c) => c.DefaultComponent) },
      { path: 'typography', loadComponent: () => import('./demo/elements/typography/typography.component') },
      { path: 'color', loadComponent: () => import('./demo/elements/element-color/element-color.component') },
      { path: 'sample-page',loadComponent: () => import('./demo/sample-page/sample-page.component') },
<<<<<<< HEAD
      { path: 'login', component: LoginComponent ,}
=======
      { path: 'food',component:FoodComponent},
      // loadComponent: () => import('./theme/shared/components/food/food.component').then((c) => c.FoodComponent)
      // { path: 'login', component: LoginComponent ,}
>>>>>>> e48c7427f9f381da7a10d30214b231be83eda4d4

      
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'guest',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
