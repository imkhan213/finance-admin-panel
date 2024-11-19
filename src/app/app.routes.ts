import { Routes } from '@angular/router';
import { AuthGuard } from './core/utility/guards/Auth/auth.guard';
import { LogedGuard } from './core/utility/guards/Loged/loged.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/modules/auth/auth.module').then((mod) => mod.AuthModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/modules/dashboard/dashboard.module').then(
        (mod) => mod.DashboardModule,
      ),
    canActivate: [LogedGuard],
  },
];
