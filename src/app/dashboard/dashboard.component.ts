import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';



import {DataServiceService} from '../data-service.service';

import {ShareService} from '../share.service';

import { LoaderService } from '../index'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects=[];
 
  

  constructor(private loaderService:LoaderService,
    private dashbordservice:DataServiceService,
    private profileService:ShareService) { 
      this.Init()
    }
  
Init(){
        //http call starts
        this.loaderService.display(true);
        this.dashbordservice.getProjects()
        .subscribe(res=>{
          this.projects=res;
          console.log(res);
              //http call ends
    this.loaderService.display(false);
          // this.profileService.setProjects(res);
        });
}
  ngOnInit() {

    
  }

}
