import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {DataServiceService} from '../data-service.service';

import { LoaderService } from '../index'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user=[];
allusers=[];
  constructor( private loaderService:LoaderService,
     public addservice:DataServiceService,
    private router:Router) { }

  ngOnInit() {
    this.addservice.getUsers().subscribe(
      res=>{
        this.allusers=res;
      }
    )
  }
  addUser(value){
            //http call starts
this.loaderService.display(true);
  this.addservice.addUser(value).subscribe(res=>{
  console.log(res);
  this.user=res;
           //http call ends
this.loaderService.display(false);
  this.router.navigate(['/landing/user']);
  this.addservice.getUsers().subscribe(
    res=>{
      this.allusers=res;
    }
  )
})
  }
}
