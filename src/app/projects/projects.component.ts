import { Component, OnInit } from '@angular/core';

import {ShareService} from '../share.service';

import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects=[];

  constructor( 
   public projectService:DataServiceService) { }

  ngOnInit() {
    this.projectService.getProjects()
    .subscribe(res=>{
      this.projects=res;
      
  });

}
}