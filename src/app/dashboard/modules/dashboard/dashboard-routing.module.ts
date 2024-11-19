import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../components/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        loadComponent: () =>
          import('../../components/childrens/overview/overview.component').then(
            (m) => m.OverviewComponent,
          ),
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import(
            '../../components/childrens/transactions/transactions.component'
          ).then((m) => m.TransactionsComponent),
      },
      {
        path: 'accounts',
        loadComponent: () =>
          import('../../components/childrens/accounts/accounts.component').then(
            (m) => m.AccountsComponent,
          ),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import(
            '../../components/childrens/categories/categories.component'
          ).then((m) => m.CategoriesComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../../components/childrens/settings/settings.component').then(
            (m) => m.SettingsComponent,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
