import { AsyncPipe, CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  inject,
} from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { header } from '../../../models/header.interface';
import { Router, RouterLink } from '@angular/router';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import { DropdownComponent } from '../../../../shared/components/dropdown/dropdown.component';
import { DatepickerComponent } from '../../../../shared/components/datepicker/datepicker.component';
import { CommService } from '../../../../shared/services/common/comm.service';
import { dropDownList } from '../../../../shared/models/shared.interface';
import { AnimationOptions } from 'ngx-lottie';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    RouterLink,
    AvatarComponent,
    NgOptimizedImage,
    DropdownComponent,
    DatepickerComponent,
    AsyncPipe,
    IconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  readonly route = inject(Router);
  readonly comm = inject(CommService);
  readonly auth = inject(AuthService);

  public isMenuOpen = signal<boolean>(false);

  public options: AnimationOptions = {
    path: '/json/menu.json',
    autoplay: false,
    loop: false,
  };

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

  dropItemList = signal<dropDownList[]>([
    { name: 'All account', id: 1 },
    { name: 'Checking', id: 2 },
    { name: 'Saving', id: 3 },
  ]);

  ngOnInit(): void {
    const routePath = this.route.url.replace('/dashboard/', '');
    const capitalizedPath = this.capitalizeFirstLetter(routePath);
    this.setActiveButton(capitalizedPath);
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  setActiveButton(btnName: string) {
    this.navList.map((item) =>
      item.name == btnName ? (item.isSelect = true) : (item.isSelect = false),
    );
  }
}
