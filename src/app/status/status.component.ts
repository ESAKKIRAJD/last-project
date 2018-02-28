import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  projects:any;

  constructor( private statusService:DataServiceService,
    private router:Router) { }

  ngOnInit() {
    this.statusService.getProjects()
    .subscribe(res=>{
      this.projects=res;
  })
}
onUpdate(value){
  console.log(value);
  this.statusService.onUpdate(value).subscribe(res=>{
    this.projects=res
    console.log(res);
    this.router.navigate(['/landing/projects']);
  })
}

}