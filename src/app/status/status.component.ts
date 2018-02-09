import { Component, OnInit } from '@angular/core';

import {ShareService} from '../share.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  projects=[];

  constructor( private shareservice:ShareService) { }

  ngOnInit() {
    this.projects=this.shareservice.getProjects();
  }

}
