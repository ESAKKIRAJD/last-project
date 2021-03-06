import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

import { EqualValidator } from './change-password/equal-validator.directive';  // import validator


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { StatusComponent } from './status/status.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NewProjectsComponent } from './new-projects/new-projects.component';
import { PaymentComponent } from './payment/payment.component';


import { DataServiceService } from './data-service.service';
import { ShareService } from './share.service';
import { LoaderService } from './index'


import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingUserpageComponent } from './landing-userpage/landing-userpage.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    ProfileComponent,
    ProjectsComponent,
    StatusComponent,
    ChangePasswordComponent,
    NewProjectsComponent,
    PaymentComponent,
    LandingPageComponent,
    LandingUserpageComponent,
    SpinnerComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', pathMatch:'full', redirectTo:'login'},
      { path:'login',component:LoginComponent },
      { path:'forgotpassword',component:ForgotPasswordComponent },      
      { path:'userlanding',component:LandingUserpageComponent,
    children:[
      { path:'',pathMatch:'full',redirectTo:'dashboard' },
      { path:'dashboard',component:DashboardComponent },
      { path:'status',component:StatusComponent },
      { path:'changepassword',component:ChangePasswordComponent },
      { path:'profile',component:ProfileComponent } 
    ]},
      { path:'landing',component:LandingPageComponent,
    children:[
      { path:'',pathMatch:'full',redirectTo:'dashboard' },
      { path:'dashboard',component:DashboardComponent },
      { path:'projects',component:ProjectsComponent},
      { path:'status',component:StatusComponent },
      { path:'payment',component:PaymentComponent },
      { path:'user',component:UserComponent },
      { path:'changepassword',component:ChangePasswordComponent },
      { path:'profile',component:ProfileComponent },
      { path:'newprojects',component: NewProjectsComponent }     
    ]}

    ])
  ],
  providers: [DataServiceService,
              ShareService,
              LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
