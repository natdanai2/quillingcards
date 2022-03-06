import {Component,OnInit} from '@angular/core';
import {QuillingcardsService} from './../shared/quillingcards.service';
import {Subscriber,Subscription} from 'rxjs';
import {ActivatedRoute,Router,RouterModule} from '@angular/router';
import {customer} from '../shared/quilling.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  path: string = 'http://localhost/quillingcards';
  customer: any

  cus_id: any
  id_status_users: any;
  customer_not_use: any;

  keyword: string = '';

  totalRecords = ""
  totalRecordsnotuse = ""
  page = 1

  isshow = true

  openshow = 1

  constructor(private customerService: QuillingcardsService, private router: ActivatedRoute, private Router: Router) {}

  ngOnInit(): void {
    this.pull()
  }
  search(): void {
    if (this.keyword != '') {
      this.isshow = false
      if (this.openshow == 1) {
        this.customer_not_use = Array()
        this.customerService.getCustomerByKey(this.keyword).subscribe(
          (customer) => {
            this.customer = customer;
          }
        );
      } else {
        this.customer = Array()
        this.customerService.getCustomernotuseByKey(this.keyword).subscribe(
          (customer) => {
            console.log(customer)
            this.customer_not_use = customer;
          }
        );
      }
    } else {
      this.isshow = true
      this.pull()
    }
  }

  delCus(cus_id: any) {
    this.customerService.deleteCustomer(cus_id,2).subscribe((success)=>{
      alert(success.message)
      this.pull()
    })
  }
  OpenCus(cus_id: any) {
    this.customerService.deleteCustomer(cus_id,1).subscribe((success)=>{
      alert(success.message)
      this.pull()
    })
  }


  pull() {
    if (this.openshow == 1) {
      this.customer_not_use = Array()
      this.customerService.getCustomer().subscribe(
        (customer) => {
          console.log(customer)
          this.customer = customer;
          this.totalRecords = customer.length
        }
      );
    } else {
      this.customer = Array()
      this.customerService.getCustomer_not_use().subscribe(
        (customer) => {
          console.log(customer)
          this.customer_not_use = customer;
          this.totalRecordsnotuse = customer.length
        }
      );
    }
  }

}
