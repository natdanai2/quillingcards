import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addcustomerUrl: string = 'http://localhost/quillingcards/api_add_customer.php';

  subAddCus: Subscription | undefined;

  constructor(private customerService: QuillingcardsService,private Router :Router) { }

  ngOnInit(): void {
  }
addemployee(cus_value: any): void {
  this.subAddCus = this.customerService.addCustomer(cus_value).subscribe(
    (feedback) => {
      alert(feedback.message);
      this.Router.navigate(['customer'])
    }
  );
}

ngOnDestroy(): void {
  this.subAddCus?.unsubscribe();

}
}
