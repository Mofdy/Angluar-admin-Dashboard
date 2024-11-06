import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userguardGuard } from '../../guards/userguard.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./register/register.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
