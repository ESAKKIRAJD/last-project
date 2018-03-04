import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import {DataServiceService} from '../data-service.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  clients=[];
  constructor(private paymentService:DataServiceService,
    private router:Router) {}

  ngOnInit() {
    this.paymentService.getPayment().subscribe(res=>{
           console.log(res);
           this.clients=res;
        })
  }
onPayment(value){
  console.log(value);
 this.paymentService.onPayment(value).subscribe(res=>{
       console.log(res);
      this.router.navigate(['/landing/payment']);
     })

}
}
