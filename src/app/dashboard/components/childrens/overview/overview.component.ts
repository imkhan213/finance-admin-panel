import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BudgetCardComponent } from '../../../../shared/components/budget-card/budget-card.component';
import { CommonModule } from '@angular/common';
import { TransChartComponent } from './charts/trans-chart/trans-chart.component';
import { CategChartComponent } from './charts/categ-chart/categ-chart.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BudgetCardComponent,
    CommonModule,
    TransChartComponent,
    CategChartComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {}
