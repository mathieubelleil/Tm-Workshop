import { Component, OnInit } from '@angular/core';
import { MembersService } from './members.service'

@Component({
  selector: 'app-module-dash',
  templateUrl: './module-dash.component.html',
  styleUrls: ['./module-dash.component.css']
})
export class ModuleDashComponent implements OnInit {

  users = [];
  constructor(private memberService: MembersService) { }

  ngOnInit() : void {
    this.getMemberList();
  }

  getMemberList(){
    this.memberService.getMembers().subscribe(
      response => this.users = response
    );
  }
}
