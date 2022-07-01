import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-planning-card',
  templateUrl: './planning-card.component.html',
  styleUrls: ['./planning-card.component.css']
})
export class PlanningCardComponent implements OnInit {
  title = 'easyfullcalendar';
  constructor() { }

  ngOnInit(): void {}

}
