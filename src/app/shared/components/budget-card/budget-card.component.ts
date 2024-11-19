import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  OnInit,
  signal,
  OnDestroy,
  inject,
  InputSignal,
} from '@angular/core';
import { BudgetTitle } from '../../models/shared.interface';
import { IconComponent } from '../icon/icon.component';
import { Subject, takeUntil } from 'rxjs';
import { CommService } from '../../services/common/comm.service';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'budget-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, IconComponent, CountUpModule],
  templateUrl: './budget-card.component.html',
  styleUrl: './budget-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetCardComponent implements OnInit, OnDestroy {
  private readonly comm = inject(CommService);
  private readonly destroy$ = new Subject<void>();

  title: InputSignal<BudgetTitle> = input.required<BudgetTitle>();
  amt: InputSignal<number> = input.required<number>();
  lastMonAmt: InputSignal<number> = input.required<number>();
  addCls: InputSignal<string> = input<string>('');

  filtDate = signal<Date[]>([
    new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 1,
      new Date().getDate(),
    ),
    new Date(),
  ]);
  finalCount = signal<number>(1000);

  periodCompaPercent = computed(() =>
    Math.round(((this.lastMonAmt() - this.amt()) / this.lastMonAmt()) * 100),
  );

  readonly currYear = new Date().getFullYear();

  ngOnInit(): void {
    this.comm.date$.pipe(takeUntil(this.destroy$)).subscribe((dateRange) => {
      if (Array.isArray(dateRange) && dateRange.length === 2) {
        this.filtDate.set([dateRange[0], dateRange[1]]);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
