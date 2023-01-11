import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyChartComponent } from './my-chart/my-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { SatisfactionChartComponent } from './satisfaction-chart/satisfaction-chart.component';
import { ActiveStudentsChartComponent } from './active-students-chart/active-students-chart.component';
import { CompletionTableComponent } from './completion-table/completion-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatablesComponent } from './matables/matables.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent,
    RadarChartComponent,
    SatisfactionChartComponent,
    ActiveStudentsChartComponent,
    CompletionTableComponent,
    MatablesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
