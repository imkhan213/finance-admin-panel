import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  input,
  InputSignal,
  signal,
  ViewChild,
  OnInit,
} from '@angular/core';
import { DropdownComponent } from '../../../../../../shared/components/dropdown/dropdown.component';
import { ChartModule, UIChart } from 'primeng/chart';
import { dropDownList } from '../../../../../../shared/models/shared.interface';
import {
  ChartData,
  ChartOptions,
  chartType,
} from '../../../../../models/dashboard.interface';

@Component({
  selector: 'trans-chart',
  standalone: true,
  imports: [CommonModule, DropdownComponent, ChartModule],
  templateUrl: './trans-chart.component.html',
  styleUrl: './trans-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransChartComponent implements OnInit {
  type = signal<chartType>('line');
  data!: ChartData;
  options!: ChartOptions;

  dropItemList = signal<dropDownList[]>([
    { name: 'Line chart', id: 1, icon: 'line-chr' },
    { name: 'Bar chart', id: 2, icon: 'bar-chr' },
  ]);

  constructor() {}

  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary',
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: [
        '23 Aug',
        '24 Aug',
        '25 Aug',
        '26 Aug',
        '27 Aug',
        '28 Aug',
        '29 Aug',
        '30 Aug',
        '31 Aug',
        '1 Sep',
        '2 Sep',
        '3 Sep',
        '4 Sep',
        '5 Sep',
        '6 Sep',
        '7 Sep',
        '8 Sep',
        '9 Sep',
        '10 Sep',
        '11 Sep',
        '12 Sep',
        '13 Sep',
        '14 Sep',
        '15 Sep',
        '16 Sep',
        '17 Sep',
        '18 Sep',
        '19 Sep',
        '20 Sep',
        '21 Sep',
        '22 Sep',
        '23 Sep',
      ],
      datasets: [
        {
          label: 'Income',
          data: [
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
          ],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.01,
        },
        {
          label: 'Expenses',
          data: [
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
          ],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--red-500'),
          borderColor: documentStyle.getPropertyValue('--red-500'),
          tension: 0.01,
        },
      ],
    };

    this.options = {
      interaction: {
        mode: 'index',
        intersect: false,
      },
      maintainAspectRatio: false,
      animation: {
        duration: 300, // Overall animation duration
        easing: 'easeInOutCubic', // Easing function for the initial animation
      },
      transitions: {
        // Define transitions for active and hover states
        active: {
          animation: {
            duration: 200, // Duration for active state transitions
            easing: 'easeInOutCubic', // Easing function for active state
          },
        },
        resize: {
          animation: {
            duration: 200, // Duration for resizing transitions
          },
        },
      },
      aspectRatio: 0.7,
      plugins: {
        legend: {
          display: false,
          position: 'top',
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
            lineWidth: 1, // Adjust line width if necessary
            borderDash: [5, 5],
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
            lineWidth: 1, // Adjust line width if necessary
            borderDash: [5, 5],
          },
        },
      },
      elements: {
        line: {
          tension: 0.4, // Adds a slight curve to the lines
        },
        point: {
          radius: 1.75, // Hide points
        },
      },
      animations: {
        x: {
          type: 'number',
          easing: 'easeOutQuart', // Smooth easing function for x transitions
          duration: 200,
          from: NaN, // Start from a blank state
          delay(ctx: any) {
            return ctx.index * 50; // Delay for each data point
          },
        },
        y: {
          type: 'number',
          easing: 'easeOutQuart', // Smooth easing function for y transitions
          duration: 200,
          from: NaN, // Start from a blank state
          delay(ctx: any) {
            return ctx.index * 50; // Delay for each data point
          },
        },
      },
    };
  }

  chartSelection(chartType: string) {
    this.type.set(chartType === 'Bar chart' ? 'bar' : 'line');
    this.initializeChart();
  }
}
