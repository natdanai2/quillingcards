import { Component, OnInit } from '@angular/core';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Subscriber, Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { customer } from '../shared/quilling.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  path: string = 'http://localhost/quillingcards';
  customer: customer[] | undefined;
  keyword: string = '';

  constructor(private customerService: QuillingcardsService,private router: Router ) { }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe(
      (customer) => {
        this.customer = customer;
      }
    );
  }
  search(): void {
    this.customerService.getCustomerByKey(this.keyword).subscribe(
      (customer) => {
        this.customer = customer;
      }
    );
  }
  delCus(cus_id:any){
    this.customerService.deleteCustomer(cus_id).subscribe(),
     window.location.reload()

  }
}
