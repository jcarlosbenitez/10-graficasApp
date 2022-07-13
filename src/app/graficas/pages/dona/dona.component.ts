import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent   {
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] }
    ]
  };

  public barChartData: ChartData<'doughnut'> = {
    labels: [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales','carlos' ],
    datasets: [
      { data: [ 350, 450, 100 ,50], label: 'Series A' ,backgroundColor: ['#2CDE59','#EB2A23','#EB23C2','#E8E468'],hoverBackgroundColor:'red'},
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
  };
  // public colors: Color[] = [{
  //   backgroundColor: ['#2CDE59','#FFFF','#EB2A23']
  // }]

}
