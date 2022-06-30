import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ModuleDashComponent } from './module-dash/module-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuleDashComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
