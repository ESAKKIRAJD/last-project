import { Component, OnInit } from '@angular/core';


import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  projects=[];

  constructor( private statusService:DataServiceService) { }

  ngOnInit() {
    this.statusService.getProjects()
    .subscribe(res=>{
      this.projects=res;
  })
}
onUpdate(value){
  console.log(value);
  this.statusService.onUpdate(value).subscribe(res=>{
    console.log(res);
  })
}

}