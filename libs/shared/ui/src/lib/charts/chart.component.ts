import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
@Component({
  selector: 'lib-chart',
  imports: [CommonModule, HighchartsChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Risk Category',
    },
    xAxis: {
      categories: [
        'AEs/SAEs',
        'PDs',
        'Non Significant PDs',
        'Study Discontinuation',
        'Screen Failure',
      ],
      // title: {
      //   text: 'Quarters',
      // },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Risk',
      },
      stackLabels: {
        enabled: false,
        style: {
          fontWeight: 'bold',
          color: 'gray',
        },
      },
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: 'Red Sites',
        data: [3, 7, 3, 0, 4],
        type: 'column',
        color: '#e74c3c',
      },
      {
        name: 'Yellow Sites',
        data: [4, 5, 3, 5, 7],
        type: 'column',
        color: '#f39c12',
      },
    ],
  };
}
