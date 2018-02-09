import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';


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
import {ShareService} from './share.service';



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
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', pathMatch:'full', redirectTo:'login'},
      { path:'login',component:LoginComponent },
      { path:'user',component:UserComponent },
      { path:'forgotpassword',component:ForgotPasswordComponent },
      { path:'profile',component:ProfileComponent },
      { path:'dashboard',component:DashboardComponent },
      { path:'projects',component:ProjectsComponent },
      { path:'status',component:StatusComponent },
      { path:'changepassword',component:ChangePasswordComponent },
      { path:'newprojects',component:NewProjectsComponent },
      { path:'payment',component:PaymentComponent },

    ])
  ],
  providers: [DataServiceService,
              ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
