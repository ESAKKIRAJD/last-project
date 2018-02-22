import { Component, OnInit } from '@angular/core';

import {ShareService} from '../share.service';

import {DataServiceService} from '../data-service.service';

import { LoaderService } from '../index'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects=[];

  constructor( private loaderService:LoaderService,
   public projectService:DataServiceService) { }

  ngOnInit() {
    //http call starts
this.loaderService.display(true);
    this.projectService.getProjects()
    .subscribe(res=>{
      this.projects=res;
      //http call ends
this.loaderService.display(false);
      
  });

}
}


