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
  datum = [];
  constructor(private paymentService:DataServiceService,
    private router:Router) {}

  ngOnInit() {
    this.paymentService.getPayment().subscribe(res=>{
           console.log(res);
           this.clients=res;
           for(let i=0; i<this.clients.length; i++){
             for(let j=0;j<this.clients[i].addpayment.length;j++){
               var data=this.clients[i].addpayment[j];
              let obj={
                amount:'',
                date:'',
                client:'',
                appname:'',
                // totalcost:''
              }
              obj.amount = this.clients[i].addpayment[j].amount;
              obj.date = this.clients[i].addpayment[j].date;
              obj.client = this.clients[i].client;
              obj.appname = this.clients[i].appname;
              // obj.totalcost = this.clients[i].totalcost;
              
               this.datum.push(obj)
             }
           }
           console.log(this.datum);
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
