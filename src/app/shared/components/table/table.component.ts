import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  OnInit,
  output,
  inject,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { TableColumn } from '../../models/shared.interface';
import { IconComponent } from '../icon/icon.component';
import { MenuModule } from 'primeng/menu';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { LottieSerService } from '../../services/lottie/lottie-ser.service';
import { ButtonComponent } from '../button/button.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    IconComponent,
    MenuModule,
    LottieComponent,
    ButtonComponent,
    ConfirmDialogComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  lottieService = inject(LottieSerService);

  cols = input.required<TableColumn[]>();
  data = input.required<any[]>();
  selectCount = output<number>();
  deleteConfirm = output<boolean>();

  first = signal<number>(0);
  rows = signal<number>(8);
  menuItems = signal<{ label: string }[]>([]);

  options: AnimationOptions[] = [
    {
      path: '/json/edit.json',
      autoplay: false,
      loop: false,
    },
    {
      path: '/json/trash.json',
      autoplay: false,
      loop: false,
    },
  ];

  ngOnInit(): void {
    this.menuItems.set([
      {
        label: 'Edit',
      },
      {
        label: 'Delete',
      },
    ]);
  }

  abs(value: number): number {
    return Math.abs(value);
  }

  next() {
    this.first.update((value) => value + this.rows());
  }

  prev() {
    this.first.update((value) => value - this.rows());
  }
}
