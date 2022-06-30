import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Member} from './member.model'

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) {}

  getMembers(){
      return this.http.get<any>('assets/member.json')
  }
}
