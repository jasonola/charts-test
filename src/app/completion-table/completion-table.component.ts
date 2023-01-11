import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completion-table',
  templateUrl: './completion-table.component.html',
  styleUrls: ['./completion-table.component.scss']
})
export class CompletionTableComponent implements OnInit {

  public dataPoints:Object[] = [
    { NAME: "Jason Ola", PROGRESS: 60+"%", ASSIGNMENTS: 6+"/7", QUIZ: 3+"/7" },
    { NAME: "Jack Grealish", PROGRESS: 60+"%", ASSIGNMENTS: 5+"/7", QUIZ: 3+"/7" },
    { NAME: "Lionel Messi", PROGRESS: 50+"%", ASSIGNMENTS: 3+"/7", QUIZ: 4+"/7" },
    { NAME: "Steve Jobs", PROGRESS: 60+"%", ASSIGNMENTS: 7+"/7", QUIZ: 3+"/7" },
    { NAME: "Larry Page", PROGRESS: 40+"%", ASSIGNMENTS: 4+"/7", QUIZ: 3+"/7" }
  ];
  constructor() { }

  ngOnInit(): void {
    this.createTable()
  }

  createTable():void{

    function generateTableHead(table:any, data:any) {
      let thead = table.createTHead();
      let row = thead.insertRow();
      for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        row.className = "colNames"
        th.appendChild(text);
        row.appendChild(th);
      }
    }
    
    function generateTable(table:any, data:any) {
      for (let element of data) {
        let row = table.insertRow();
        for (const key in element) {
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
        }
      }
    }
    
    let table = document.querySelector("table");
    let data = Object.keys(this.dataPoints[0]);
    generateTableHead(table, data);
    generateTable(table, this.dataPoints);
  }
}
