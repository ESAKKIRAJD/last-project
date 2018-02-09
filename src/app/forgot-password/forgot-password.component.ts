import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http,Response } from '@angular/http';


import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor( private forgotService:DataServiceService,private router:Router ) { }

  user=[];

  ngOnInit() {
  }

  onForgot(value){
    this.forgotService.onForgot(value).subscribe(res=>{
      console.log(res);
      this.user=res;
      this.router.navigate(['/login']);
    });
     }

}
