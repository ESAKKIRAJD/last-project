import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class ShareService {

  user:any={};
  projects:any={};

  constructor() { }
  setUser(value){
    this.user=value;
    console.log(value);
  }
  getUser(){
    return this.user;
  }
  setProjects(value){
    this.projects=value;
  }
  getProjects(){
    return this.projects;
  }

}
