import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import {DataServiceService} from '../data-service.service';

import { LoaderService } from '../index'



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  pendingAmt:any;
  client: any;
  clients=[];
  datum = [];
  proamt:any;
  constructor(private paymentService:DataServiceService,
    private router:Router,private loaderService:LoaderService) {}

  ngOnInit() {
               //http call starts
this.loaderService.display(true);
    this.paymentService.getPayment().subscribe(res=>{
           console.log(res);
           this.clients=res;
           for(let i=0; i<this.clients.length; i++){
             console.log(this.clients[i]);
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
            //http call ends
            this.loaderService.display(false);
  }

onPayment(value){
                 //http call starts
this.loaderService.display(true);
 this.paymentService.onPayment(value).subscribe(res=>{
       
     })
            //http call ends
  this.loaderService.display(false);
}


//pending amt calculating
onPending(value){
console.log(value);
this.proamt=value;
var totalamt=parseInt(this.proamt.cost)
console.log(totalamt);
this.paymentService.onPending(value).subscribe(res=>{
  console.log(res);
  this.client=res;
       var paidamt = 0;
       for(let k=0;k<this.client.addpayment.length;k++){
        paidamt += parseInt(this.client.addpayment[k].amount)
       }
       var pendingAmt=totalamt-paidamt;
       this.pendingAmt=pendingAmt;
       console.log(paidamt);
       console.log(pendingAmt);
})
}

}
