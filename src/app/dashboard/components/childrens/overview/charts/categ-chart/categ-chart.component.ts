import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  OnInit,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { catChartType } from '../../../../../models/dashboard.interface';
import { dropDownList } from '../../../../../../shared/models/shared.interface';
import { DropdownComponent } from '../../../../../../shared/components/dropdown/dropdown.component';

@Component({
  selector: 'categ-chart',
  standalone: true,
  imports: [CommonModule, ChartModule, DropdownComponent],
  templateUrl: './categ-chart.component.html',
  styleUrl: './categ-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategChartComponent implements OnInit {
  type = signal<catChartType>('doughnut');
  data!: any;
  options!: any;

  dropItemList = signal<dropDownList[]>([
    { name: 'Radial chart', id: 1, icon: 'radial-chr' },
    { name: 'Pie chart', id: 2, icon: 'pie-chr' },
  ]);

  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
          ],
        },
      ],
    };

    this.options = {
      cutout: this.type() == 'doughnut' ? '60%' : '',
      plugins: {
        legend: {
          display: false,
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };
  }

  chartSelection(chartType: string) {
    this.type.set(chartType === 'Pie chart' ? 'pie' : 'doughnut');
    this.initializeChart();
  }
}
