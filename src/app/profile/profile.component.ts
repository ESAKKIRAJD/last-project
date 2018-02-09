import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http,Response } from '@angular/http';
import { Validators } from '@angular/forms';

import {DataServiceService} from '../data-service.service';
import{ShareService} from '../share.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user=[];
  user_details=[];

  constructor(private profileService:DataServiceService,
    private router:Router, private shareservice:ShareService) {
      this.user_details=this.shareservice.getUser();
      console.log(this.user);
     }


  ngOnInit() {
  }

  onProfile(value){
    this.profileService.onProfile(value).subscribe(res=>{
     console.log(res);
       this.user=res;
       this.router.navigate(['/dashboard']);
     });
      }

}
