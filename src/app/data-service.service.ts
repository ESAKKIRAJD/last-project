import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import{Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {

  newUser:any;
  loginUser:any;
  forgotUser:any;
  profileUser:any;
  dashborddetails:any;
  regUser:any;
  updateDetails:any;
  createdDetails:any;
   

  constructor(private http:Http) { }

  onLogin(value){
    // console.log(value);
    return this.http.post('http://localhost:4000/findprofile',value)
    .map(result =>this.loginUser=result.json())
  }

  onForgot(value){
    console.log(value);
     return this.http.post('http://localhost:4000/forgotpwd',value)
     .map(result =>this.forgotUser=result.json())
  } 
  onProfile(value){
    console.log(value);
     return this.http.post('http://localhost:4000/updateprofile',value)
     .map(result =>this.profileUser=result.json())
  }
  getProjects(){
    
  return this.http.get('http://localhost:4000/projectlists')
  .map((dashborddetails:Response)=>dashborddetails.json())
} 

// add user

addUser(value){ 
  console.log(this.regUser);
  return this.http.post('http://localhost:4000/adduser',value)
  .map(result=>this.regUser=result.json())
  

}
//status update
onUpdate(value){
return this.http.post('http://localhost:4000/projectupdate',value)
.map((updateDetails:Response)=>updateDetails.json())
}
//add new projects
onNewprojects(value){
  return this.http.post('http://localhost:4000/',value)
  .map((createdDetails:Response)=>createdDetails.json())
   }


}
