import { Component, OnInit } from '@angular/core';

import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user=[];
allusers=[];
  constructor( public addservice:DataServiceService) { }

  ngOnInit() {
    this.addservice.getUsers().subscribe(
      res=>{
        this.allusers=res;
      }
    )
  }
  addUser(value){
  this.addservice.addUser(value).subscribe(res=>{
  console.log(res);
  this.user=res;
})
  }
}
