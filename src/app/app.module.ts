import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from "./home/home.component";

import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { BarGraphComponent } from './bar-graph/bar-graph.component';

import { ChartsModule } from 'ng2-charts';
import { HorBarGraphComponent } from './hor-bar-graph/hor-bar-graph.component';
//import { HistogramComponent } from './src/app/histogram/histogram.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HistogramComponent } from './histogram/histogram.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BarGraphComponent,
    HorBarGraphComponent,
    HistogramComponent,
    //HistogramComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    ChartsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
