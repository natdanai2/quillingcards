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

  cus_id:any
  name : any
  phone: any
  address: any
  birthdate: any
  urole: any
  email:any
  password:any

  constructor(private customerService: QuillingcardsService,private router:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.cus_id)
  this.customerService.getCustomerdetailByCusId(this.router.snapshot.params.cus_id).subscribe((result)=>{
    console.log(result)
      this.cus_id = result[0].cus_id
      this.name = result[0].name
      this.phone = result[0].phone
      this.address = result[0].address
      this.birthdate = result[0].birthdate
      this.urole = result[0].urole_id
      this.email = result[0].email_address
      this.password = result[0].password
  })
}
  updatecustomer(FormControlName: any): void {
    FormControlName.cus_id = this.cus_id
    FormControlName.email = this.email
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
