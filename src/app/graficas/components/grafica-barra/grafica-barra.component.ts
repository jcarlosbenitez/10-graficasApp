import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent  implements OnInit{
  @Input() horizontal: boolean = false;
  @Input()  labels: string[] = []
  @Input()  datasets: any = []
    // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' ,backgroundColor: '#627AF5',hoverBackgroundColor:'red'},
    // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' , backgroundColor: '#EB23C2',hoverBackgroundColor:'red'},
    // { data: [ 28, 38, 47, 59, 86, 27, 90 ], label: 'mi nombre',backgroundColor: ['#2CDE59'], hoverBackgroundColor:'red'}
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x',
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart'
      }
    }
    // We use these empty structures as placeholders for dynamic theming.
  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets:[]
    // labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    // datasets: [
    //   { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' ,backgroundColor: '#627AF5',hoverBackgroundColor:'red'},
    //   { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' , backgroundColor: '#EB23C2',hoverBackgroundColor:'red'},
    //   { data: [ 28, 38, 47, 59, 86, 27, 90 ], label: 'mi nombre',backgroundColor: ['#2CDE59'], hoverBackgroundColor:'red'}
    // ]
  };

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }
  constructor(){
console.log(this.horizontal)
  }

  ngOnInit(): void {
    if(this.horizontal){
      const value= 'indexAxis';
      console.log("bar",this.barChartOptions!.indexAxis = 'y' )
      
      // this.barChartType = 'horizontalBar';
    }

    this.barChartData!.labels = this.labels
    this.barChartData!.datasets = this.datasets

    
  }

  

}
