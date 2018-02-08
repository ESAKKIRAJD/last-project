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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    ProfileComponent,
    ProjectsComponent,
    StatusComponent
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
      { path:'status',component:StatusComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
