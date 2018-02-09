import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {DataServiceService} from '../data-service.service';
import {ShareService} from '../share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=[];

  constructor(private loginService:DataServiceService,private router:Router,
    private shareservice:ShareService) { }

  ngOnInit() {
  }

  onLogin(value){
    
         this.loginService.onLogin(value).subscribe(res=>{
           this.user=res;
           console.log(this.user);
    
           this.router.navigate(['/dashboard']);
           this.shareservice.setUser(res);
          
          
         });
    
         }
}
