import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private changepasswordService:DataServiceService,private router:Router) { }

  ngOnInit() {
  }

  onChangepass(value){
      console.log(value)
       this.router.navigate(['/landing/dashboard']);
       }

}
