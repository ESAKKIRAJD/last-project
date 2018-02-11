import { Component, OnInit } from '@angular/core';

import {ShareService} from '../share.service';

@Component({
  selector: 'app-landing-userpage',
  templateUrl: './landing-userpage.component.html',
  styleUrls: ['./landing-userpage.component.css']
})
export class LandingUserpageComponent implements OnInit {

  user=[];

  constructor( public shareservice:ShareService) {
      this.user=this.shareservice.getUser();
   }

  ngOnInit() {
  }

}
