import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('../../auth/sign-in/sign-in.component').then(
        (mod) => mod.SignInComponent,
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('../../auth/sign-up/sign-up.component').then(
        (mod) => mod.SignUpComponent,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
