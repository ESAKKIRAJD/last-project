import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.css']
})
export class NewProjectsComponent implements OnInit {
projects={};
  constructor(private newprojectService:DataServiceService,private router:Router) { }

  ngOnInit() {
    this.newprojectService.getProjects()
    .subscribe(res=>{
      this.projects=res;
  })
  }
//   onNewprojects(value){
//  console.log(value)
//  this.router.navigate(['/landing/projects']);
//   }

  onNewprojects(value){
    console.log(value);
    this.newprojectService.onNewprojects(value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/landing/projects']);
    })
  }
  

}
