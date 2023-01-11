import { Component, OnInit } from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    this.createChart()
}

createChart(): void {
  Chart.register(...registerables);

  const dataPoints = [35,37, 69, 25, 19, 11, 9, 10,53,35,30,28]
  const stepSize = Math.round(Math.max(...dataPoints)/5)

  const data = {
    labels: ['12','1','2','3','4','5','6','7','8','9','10','11'],
    datasets: [{
      data: dataPoints,
      fill: true,
      backgroundColor: 'rgba(255,204,0, 0.2)',
      borderColor: 'rgba(255,204,0)',
      pointBackgroundColor: 'rgb(255,204,0)',

    }]
  };


  const config: ChartConfiguration = {
    type: 'radar',
    data: data,
    options: {
      responsive:true,
      scales:{
        r:{
          ticks:{
            stepSize:stepSize
          },
        }
      },
      elements:{
        line:{
          borderWidth:2,
        }
      },
      plugins:{
        legend:{
          display:false,
        },
      }
    }
  }

  const chartItem: ChartItem = document.getElementById('radarChart') as ChartItem

  new Chart(chartItem, config)

  }
}