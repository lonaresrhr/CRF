import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-hor-bar-graph',
  templateUrl: './hor-bar-graph.component.html',
  styleUrls: ['./hor-bar-graph.component.scss']
})
export class HorBarGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 public barChartOptions:any = {
     legend: {
        display: true
    },
    responsive: true,
    scales: {
    yAxes: [{
      display:false,
      maxBarThickness: 40,
      gridLines: {
         drawBorder: false,
         display: false,
      },
    }],
    xAxes: [{
      display:true,
      gridLines: {
        display: false,

        },
      }],
    },
  };

  public barChartLabels: Label[] = ['2006'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
      { data: [65, ], label: 'Series A', stack: 'a' },
      { data: [10,], label: 'Series B', stack: 'a' },
      { data: [10,], label: 'Series C', stack: 'a' },
       { data: [15,], label: 'Series D', stack: 'a' }
    ];

    public barChartColors:Array<any> = [
    {
      backgroundColor: '#ce822b',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },{
      backgroundColor: '#0acf8d',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },{
      backgroundColor: '#0879cf',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },{
      backgroundColor: '#acacac',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    }

  ];

}
