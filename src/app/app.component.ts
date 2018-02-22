import { Component,OnInit } from '@angular/core';

import { LoaderService } from './index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showLoader: boolean;
  constructor(
    private loaderService: LoaderService) {
}
ngOnInit() {
  this.loaderService.status.subscribe((val: boolean) => {
      if(val) {
        this.showLoader = true;
      } else {
        this.showLoader = false;
      }
  });
}
}

