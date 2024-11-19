import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { BudgetCardComponent } from '../../../../shared/components/budget-card/budget-card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { SearchComponent } from '../../../../shared/components/search/search.component';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { LottieSerService } from '../../../../shared/services/lottie/lottie-ser.service';
import { SidebarModule } from 'primeng/sidebar';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { AddCatComponent } from './add-cat/add-cat.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    IconComponent,
    LottieComponent,
    SearchComponent,
    TableComponent,
    SidebarModule,
    ConfirmDialogComponent,
    AddCatComponent,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  readonly lottieService = inject(LottieSerService);

  cols = signal<any[]>([
    { field: 'name', header: 'Name' },
    { field: 'action', header: 'Action' },
  ]);

  tableData = signal<any[]>([
    { id: 1, name: 'Rent' },
    { id: 2, name: 'Groceries' },
    { id: 3, name: 'Utilities' },
    { id: 4, name: 'Entertainment' },
    { id: 5, name: 'Dining' },
    { id: 6, name: 'Transportation' },
    { id: 7, name: 'Healthcare' },
    { id: 8, name: 'Shopping' },
    { id: 9, name: 'Education' },
    { id: 10, name: 'Fitness' },
  ]);

  options: AnimationOptions = {
    path: '/json/trash.json',
    autoplay: false,
    loop: false,
  };

  rowSeleCount = signal<number>(0);
  sidebarVisible = signal<boolean>(false);
}
