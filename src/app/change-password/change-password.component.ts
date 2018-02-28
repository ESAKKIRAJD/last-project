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
  
    constructor(private changepasswordService:DataServiceService,private router:Router) { }
  
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

      this.changepasswordService.onChangepass(value).subscribe(res=>{
        console.log(res);
          this.user=res;
          if(res && res.role=="user"){
            this.router.navigate(['/userlanding/dashboard']);
          }else if(res && res.role=="admin"){
            this.router.navigate(['/landing/dashboard']);
          }
         
        });
  }

}
