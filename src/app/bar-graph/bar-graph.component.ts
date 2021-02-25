import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})

export class BarGraphComponent implements OnInit {
    constructor() { }
    ngOnInit() {
    }

    public barChartOptions:any = {
     legend: {
        display: false
    },
    responsive: true,
    scales: {
    yAxes: [{
      gridLines: {
        drawBorder: false,
         display: false,
      },
    }],
    xAxes: [{
      gridLines: {
        display: false,
        },
      }],
    },
  };

    public mbarChartLabels:string[] = ['16 Feb', '17 Feb', '18 Feb', '19 Feb', '20 Feb', '21 Feb', '22 Feb'];
    public barChartType:any = 'bar';
    //public barChartType:any = 'horizontalBar';
    public barChartLegend:boolean = false;

    public barChartColors:Array<any> = [
    {
      backgroundColor: '#ce822b',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },

  ];

  public barChartData:any[] = [
      {data: [55, 60, 75, 82, 56, 62, 80], label: 'Company A'},
   ];

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }

    public randomize():void {
      let data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        (Math.random() * 100),
        Math.round(Math.random() * 100),
        (Math.random() * 100),
        Math.round(Math.random() * 100)];
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      this.barChartData = clone;
    }
}
