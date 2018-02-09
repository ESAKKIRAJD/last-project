import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class ShareService {

  user:any={};

  constructor() { }
  setUser(value){
    this.user=value;
    console.log(value);
  }
  getUser(){
    return this.user;
  }

}
