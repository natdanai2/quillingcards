import { customer } from './../shared/quilling.model';
import { Component, OnInit } from '@angular/core';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Subscriber, Subscription } from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  path: string = 'http://localhost/quillingcards';
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
  users_status:any

  detail:any = ""

  constructor(private customerService: QuillingcardsService,private router:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.cus_id)
    this.customerService.getCustomerdetailByCusId(this.router.snapshot.params.cus_id).subscribe((result)=>{
      console.log(result)
      this.detail=result[0]
      this.address=result
    })
  }
  ngOnDestroy(): void{
    this.subEditCus?.unsubscribe();
  }
}
