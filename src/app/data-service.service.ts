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
   changepassDetails:any;
   allusers:any; 

  constructor(private http:Http) { }

  // onLogin

  onLogin(value){
    // console.log(value);
    return this.http.post('https://young-mountain-97541.herokuapp.com/findprofile',value)
    .map(result =>this.loginUser=result.json())
  }

  // onForgot

  onForgot(value){
    console.log(value);
     return this.http.post('https://young-mountain-97541.herokuapp.com/forgotpwd',value)
     .map(result =>this.forgotUser=result.json())
  } 

  //onProfile

  onProfile(value){
    console.log(value);
     return this.http.post('https://young-mountain-97541.herokuapp.com/updateprofile',value)
     .map(result =>this.profileUser=result.json())
  }

  //  getProjects
  getProjects(){
    
  return this.http.get('https://young-mountain-97541.herokuapp.com/projectlists')
  .map((dashborddetails:Response)=>dashborddetails.json())
} 

// add user

addUser(value){ 
  console.log(this.regUser);
  return this.http.post('https://young-mountain-97541.herokuapp.com/adduser',value)
  .map(result=>this.regUser=result.json())
  

}
// project status  update

onUpdate(value){
return this.http.post('https://young-mountain-97541.herokuapp.com/projectupdate',value)
.map((updateDetails:Response)=>updateDetails.json())
}

//add new projects

onNewprojects(value){
  return this.http.post('https://young-mountain-97541.herokuapp.com/newproject',value)
  .map((createdDetails:Response)=>createdDetails.json())
   }

   // user change password
   
   onChangepass(value){
  return this.http.post('https://young-mountain-97541.herokuapp.com/changepassword',value)
  .map((changepassDetails:Response)=>changepassDetails.json())
   }

  //  getUsers
  
  getUsers(){
   console.log(this.allusers) 
  return this.http.get('https://young-mountain-97541.herokuapp.com/getallusers')
  .map((allusers:Response)=>allusers.json())
} 


}
