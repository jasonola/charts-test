import { Component, OnInit } from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'

@Component({
  selector: 'app-active-students-chart',
  templateUrl: './active-students-chart.component.html',
  styleUrls: ['./active-students-chart.component.scss']
})
export class ActiveStudentsChartComponent implements OnInit {

  public maxStudent: number = 150
  public dataPointsDropout: number[] = [5,6,10,17,23,80]
  public dates: string[] = ["Jul","Aug", "Sept","Oct","Nov","Dec"]
  //public cumSumDropout:number[] = this.dataPointsDropout.map((sum => value => sum += value)(0))
  public dataPointsActive: number[] = this.dataPointsDropout.map(num => this.maxStudent - num)
  public numActiveStudentsToday: number = this.dataPointsActive.slice(-1)[0]
  public numActiveStudentsLastMonth: number = this.dataPointsActive.slice(-2)[0]
  public trend: number = Math.abs(Math.round(((this.numActiveStudentsToday - this.numActiveStudentsLastMonth)/this.numActiveStudentsLastMonth) * 100))

  public colors: string[] = [
    '#63BFAD',
    '#717171'
  ]

  public labels: string[] = ['Active students', 'Dropout students']

  constructor() { }

  ngOnInit(): void {
    this.createChart()
  }
  createChart(): void {
    Chart.register(...registerables);

    console.log(this.numActiveStudentsLastMonth)
    const data = {
      labels: this.dates,
      datasets: [{
        data: this.dataPointsActive,
        backgroundColor: this.colors[0],
        barThickness:22,
        borderRadius: 3
      },{
        data: this.dataPointsDropout,
        backgroundColor: this.colors[1],
        barThickness:22,
        borderRadius:3
      }]
    };

    const config: ChartConfiguration = {
      type: 'bar',
      data: data,
      options: {
          scales:{
            x:{
              grid:{
                display:false
              },
            },
          },
          plugins:{
            legend:{
              display:false,
            },
          }
        }
      }
  const chartItem: ChartItem = document.getElementById('activeStudentChart') as ChartItem

  var myChart = new Chart(chartItem, config)

  // myChart.data.datasets[0].backgroundColor = "#FFCC00";
  // myChart.update();

  }

}
