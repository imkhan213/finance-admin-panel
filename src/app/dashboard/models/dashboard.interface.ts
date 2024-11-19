export type chartType = 'line' | 'bar';
export type catChartType = 'doughnut' | 'pie';

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    backgroundColor: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension: number;
  }[];
}

export interface ChartOptions {
  interaction: {
    mode: string;
    intersect: boolean;
  };
  maintainAspectRatio: boolean;
  animation: {
    duration: number;
    easing: string;
  };
  transitions: {
    active: {
      animation: {
        duration: number;
        easing: string;
      };
    };
    resize: {
      animation: {
        duration: number;
      };
    };
  };
  aspectRatio: number;
  plugins: {
    legend: {
      display: boolean;
      position: string;
    };
  };
  scales: {
    x: {
      ticks: {
        color: string;
      };
      grid: {
        color: string;
        drawBorder: boolean;
        lineWidth: number;
        borderDash: number[];
      };
    };
    y: {
      ticks: {
        color: string;
      };
      grid: {
        color: string;
        drawBorder: boolean;
        lineWidth: number;
        borderDash: number[];
      };
    };
  };
  elements: {
    line: {
      tension: number;
    };
    point: {
      radius: number;
    };
  };
  animations: {
    x: {
      type: string;
      easing: string;
      duration: number;
      from: number;
      delay: (ctx: any) => number;
    };
    y: {
      type: string;
      easing: string;
      duration: number;
      from: number;
      delay: (ctx: any) => number;
    };
  };
}
