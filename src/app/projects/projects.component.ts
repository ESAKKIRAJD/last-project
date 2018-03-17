import { Component, OnInit } from '@angular/core';

import {ShareService} from '../share.service';

import {DataServiceService} from '../data-service.service';

import { LoaderService } from '../index';

import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects=[];

  constructor( private loaderService:LoaderService,
   public projectService:DataServiceService,
   private router:Router) { 
     this.Init();
  }
  Init(){
        //http call starts
this.loaderService.display(true);
this.projectService.getProjects()
.subscribe(res=>{
  this.projects=res;
  //http call ends
this.loaderService.display(false);
  
});
  }

  ngOnInit() {


}


onEdit(value){
  console.log(value);
  this.projectService.onEdit(value).subscribe(res=>{
    console.log(res);
   this.router.navigate(['/landing/project']);
})
}

onClose(value){
  console.log(value);
  this.projectService.onClose(value).subscribe(res=>{
    console.log(res);
   this.router.navigate(['/landing/project']);
})

}

}


