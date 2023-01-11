import { Component, OnInit } from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'

@Component({
  selector: 'app-satisfaction-chart',
  templateUrl: './satisfaction-chart.component.html',
  styleUrls: ['./satisfaction-chart.component.scss']
})
export class SatisfactionChartComponent implements OnInit {

  public dataPoints: number[] = [70,10,80,10,40]
  public sumDataPoints: number =  this.dataPoints.reduce((a, b) => {
    return a + b;
  });
  public labels: string[] = ["Happy","Satisfied","Neutral", "Unhappy", "Sad"]
  public maxDataPoints: number = Math.max(...this.dataPoints)
  public maxIndex: number = this.dataPoints.indexOf(this.maxDataPoints)
  public maxSatisfaction: string = this.labels[this.maxIndex]
  public subSat: string = this.maxSatisfaction
  public subMax: number = this.maxDataPoints
  public subTot: number = this.sumDataPoints
  public colors: string[] = [
    'rgba(141, 178, 133)',
    'rgba(195,	225,	178	)',
    'rgba(212,	194,	72	)',
    'rgba(240,	210,	98	)',
    'rgba(235,	136,	125	)'
  ]

  public smileys: string[] = [
    'assets/happy.svg',
    'assets/satisfied.svg',
    'assets/neutral.svg',
    'assets/unhappy.svg',    
    'assets/sad.svg',
  ]
  

  constructor() { }

  ngOnInit(): void {
    this.createChart()
  }
  createChart(): void {
    Chart.register(...registerables);

    const legendEl:any = document.querySelector(".subSat")
    //legendEl.innerHTML = this.smileys[this.maxIndex]
    const maxEmoji:any = document.createElement("img")
    maxEmoji.className = "maxEmoji"
    maxEmoji["src"] = this.smileys[this.maxIndex]
    legendEl.append(maxEmoji)

    for (let i = 0; i < this.smileys.length; i++) {
      const yAxisEl:any = document.createElement("div")
      yAxisEl.className = "smileyEl"
      const emoji:any = document.createElement("img")
      emoji["src"] = this.smileys[i]
      yAxisEl.append(emoji)
      // yAxisEl.innerHTML = this.smileys[i]
      document.querySelector(".yAxisWrapper")?.append(yAxisEl)
    }
   

    const data = {
      labels: this.labels,
      datasets: [{
        data: this.dataPoints,
        backgroundColor: this.colors,
        barThickness:22,
        borderRadius: 3
      }]
    };

    const config: ChartConfiguration = {
      type: 'bar',
      data: data,
      options: {
          scales:{
            y:{
              grid:{
                display:false
              },
              ticks:{
                display:false
              }
            },
          },
          indexAxis:"y",
          plugins:{
            legend:{
              display:false,
            },
          }
        }
      }
  const chartItem: ChartItem = document.getElementById('satisfactionChart') as ChartItem

  new Chart(chartItem, config)
  }
  
}
