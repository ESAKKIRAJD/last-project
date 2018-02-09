import { Component, OnInit } from '@angular/core';

import {ShareService} from '../share.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects=[];

  constructor( public projectsService:ShareService) { }

  ngOnInit() {
      this.projects=this.projectsService.getProjects();
      console.log(this.projects)
  }

}
