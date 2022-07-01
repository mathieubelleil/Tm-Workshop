import { Component, OnInit } from '@angular/core';
import { Module } from './module';
import { STUDENTS } from './mock-students';


@Component({
  selector: 'app-emargement',
  templateUrl: './emargement.component.html',
  styleUrls: ['./emargement.component.less']
})
export class EmargementComponent implements OnInit {
  students = STUDENTS
  public myAngularxQrCode: string = null;
  module: Module = {
    code : Math.floor((Math.random() * 90000) + 10000).toString()
  };
  constructor() { 
  }

  ngOnInit() {
    this.myAngularxQrCode = 'http://localhost:4200/emargement/' + this.module.code;
    // this.myAngularxQrCode = 'https://lefren.ch/planning';

  }

}
