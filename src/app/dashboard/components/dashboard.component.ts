import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../core/components/common/header/header.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { CommService } from '../../shared/services/common/comm.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AuthService } from '../../core/services/auth/auth.service';
import { header } from '../../core/models/header.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    IconComponent,
    AsyncPipe,
    CommonModule,
    RouterLink,
    ButtonComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  readonly comm = inject(CommService);
  readonly route = inject(Router);
  readonly auth = inject(AuthService);

  public isMenuOpen = signal<boolean>(false);

  public navList: header[] = [
    {
      name: 'Overview',
      link: '/dashboard/overview',
      isSelect: true,
      icon: 'overview',
    },
    {
      name: 'Transactions',
      link: '/dashboard/transactions',
      isSelect: false,
      icon: 'transactions',
    },
    {
      name: 'Accounts',
      link: '/dashboard/accounts',
      isSelect: false,
      icon: 'user',
    },
    {
      name: 'Categories',
      link: '/dashboard/categories',
      isSelect: false,
      icon: 'category',
    },
    {
      name: 'Settings',
      link: '/dashboard/settings',
      isSelect: false,
      icon: 'setting',
    },
  ];
}
