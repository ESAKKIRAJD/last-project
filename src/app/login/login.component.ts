import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {DataServiceService} from '../data-service.service';
import {ShareService} from '../share.service';

import { LoaderService } from '../index'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=[];

  constructor(private loginService:DataServiceService,private router:Router,
    private shareservice:ShareService,
  private loaderService:LoaderService) { }

  ngOnInit() {
  }

  onLogin(value){
           //http call starts
this.loaderService.display(true);
         this.loginService.onLogin(value).subscribe(res=>{
           this.user=res;
           console.log(this.user[0].role);
           if(this.user && this.user[0].role=="user"){
          
            this.router.navigate(['/userlanding']);
           }else if(this.user && this.user[0].role=="admin"){
            this.router.navigate(['/landing']);
           }
           else{
            this.router.navigate(['/login']);
           }
    
           
           this.shareservice.setUser(res);
          
                   //http call ends
this.loaderService.display(false);
         });
    
         }
}
