import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user.interface';


import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  // constructor(private changepasswordService:DataServiceService,private router:Router) { }

  // ngOnInit() {
  // }

  // onChangepass(value){
  //     console.log(value)
  //      this.router.navigate(['/landing/dashboard']);
  //      }

  public user: User; 
  
    constructor() { }
  
    ngOnInit() {
         // initialize model here
         this.user = {
          // username: '',
          email: '',
          password: '',
          confirmPassword: ''
      }
    }
  
    onChangepass(value) {
      // call API to save customer
      console.log(value);
  }

}
