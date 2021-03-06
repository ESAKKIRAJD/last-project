import { Component, OnInit } from '@angular/core';

import {ShareService} from '../share.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  user=[];

  constructor( public shareservice:ShareService) {
      this.user=this.shareservice.getUser();
   }

  ngOnInit() {
  }

}
