import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public barChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Series A' ,backgroundColor: ['#2CDE59','#EB2A23','#EB23C2','#E8E468'],hoverBackgroundColor:'red'},
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
  };
  constructor(private graficasServices: GraficasService) {}
  ngOnInit(): void {
    // this.graficasServices.getUsuariosRedesSociales().subscribe((data) => {
    //   console.log(data);
    //   Object.values(data)
    //   console.log( Object.values(data))
    //   this.barChartData.labels = Object.keys(data)
    //   this.barChartData.datasets[0].data = Object.values(data)

    // });
    this.graficasServices.getUsuariosData().subscribe(({labels,values}) => {
      console.log(labels,values);
      this.barChartData.labels = labels
     this.barChartData.datasets[0].data = values
     console.log(this.barChartData)
     
    })
  }
}
