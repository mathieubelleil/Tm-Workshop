import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table'
import {TabViewModule} from 'primeng/tabview';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ModuleDashComponent } from './module-dash/module-dash.component';
import { PlanningCardComponent } from './planning-card/planning-card.component';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    ModuleDashComponent,
    PlanningCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    TabViewModule,
    CommonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
