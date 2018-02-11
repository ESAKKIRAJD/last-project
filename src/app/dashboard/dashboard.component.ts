import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';



import {DataServiceService} from '../data-service.service';

import {ShareService} from '../share.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects=[];
  user=[];
  

  constructor(private dashbordservice:DataServiceService,
    private profileService:ShareService) { 
      
    }
  

  ngOnInit() {
    this.dashbordservice.getProjects()
    .subscribe(res=>{
      this.projects=res;
      console.log(res);
      // this.profileService.setProjects(res);
    });
    
  }

}
