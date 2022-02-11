import { Subscriber, Subscription } from 'rxjs';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormControl, FormControlName, } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  subEditCus: Subscription | undefined;

  alert:boolean = false;
editCustomer= new FormGroup({
  cus_id: new FormControl(''),
  name: new FormControl(''),
  phone: new FormControl(''),
  address: new FormControl(''),
  email_address: new FormControl(''),
  birthdate: new FormControl('')
})

  constructor(private customerService: QuillingcardsService,private router:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.cus_id)
  this.customerService.getCustomerByCusId(this.router.snapshot.params.cus_id).subscribe((result)=>{
    console.log(result)
      this.editCustomer= new FormGroup({
        cus_id: new FormControl(this.router.snapshot.params.cus_id),
        name: new FormControl(result[0].name),
        phone: new FormControl(result[0].phone),
        address: new FormControl (result[0].address),
        email_address: new FormControl (result[0].email_address),
        birthdate: new FormControl (result[0].birthdate)
      })
    })
  }
  updatecustomer(FormControlName: any): void {
    console.log(FormControlName)
    this.subEditCus = this.customerService.updateCus(FormControlName).subscribe(
      (feedback) => {
        alert(feedback.message);
        this.Router.navigate(['customer'])
      }
    );
  }
  ngOnDestroy(): void{
    this.subEditCus?.unsubscribe();
  }
}
