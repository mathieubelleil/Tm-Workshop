import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { ModuleDashComponent } from './module-dash.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table'

const routes:Routes = [
  {path: '',
   component: ModuleDashComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    NgModule
  ]
})
export class ModuleDashModule { }
