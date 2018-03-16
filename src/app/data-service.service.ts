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
  paymentDetails:any;
  getClients:any;

  constructor(private http:Http) { }

  // onLogin
  

  onLogin(value){
    // console.log(value);
    return this.http.post('https://calm-brook-82945.herokuapp.com/users/login',value)
    .map(result =>this.loginUser=result.json())
  }

  // onForgot

  onForgot(value){
    console.log(value);
     return this.http.post('https://calm-brook-82945.herokuapp.com/users/forgotpwd',value)
     .map(result =>this.forgotUser=result.json())
  } 

  //onProfile

  onProfile(value){
    console.log(value);
     return this.http.post('https://calm-brook-82945.herokuapp.com/users/updateprofile',value)
     .map(result =>this.profileUser=result.json())
  }

  //  getProjects
  getProjects(){
    
  return this.http.get('https://calm-brook-82945.herokuapp.com/projects/getprojects')
  .map((dashborddetails:Response)=>dashborddetails.json())
} 

// add user

addUser(value){ 
  console.log(this.regUser);
  return this.http.post('https://calm-brook-82945.herokuapp.com/users/adduser',value)
  .map(result=>this.regUser=result.json())
  

}
// project status  update

onUpdate(value){
return this.http.post('https://calm-brook-82945.herokuapp.com/projects/projectupdate',value)
.map((updateDetails:Response)=>updateDetails.json())

}

//add new projects

onNewprojects(value){
  return this.http.post('https://calm-brook-82945.herokuapp.com/projects/addproject',value)
  .map((createdDetails:Response)=>createdDetails.json())
   }

   // user change password
   
   onChangepass(value){
  return this.http.post('https://calm-brook-82945.herokuapp.com/users/changepwd',value)
  .map((changepassDetails:Response)=>changepassDetails.json())
   }

  //  getUsers
  
  getUsers(){
   console.log(this.allusers) 
  return this.http.get('https://calm-brook-82945.herokuapp.com/users/getusers')
  .map((allusers:Response)=>allusers.json())
} 

// on Payment

onPayment(value){
  return this.http.post('https://calm-brook-82945.herokuapp.com/payments/addpayment',value)
  .map((paymentDetails:Response)=>paymentDetails.json())
   }

//get payment clients and projects

getPayment(){
  return this.http.get('https://calm-brook-82945.herokuapp.com/payments/getclients')
  .map((getClients:Response)=>getClients.json())
}   

}


