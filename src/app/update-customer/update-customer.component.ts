import { Subscriber, Subscription } from 'rxjs';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormControl, FormControlName, } from '@angular/forms';
import Swal from 'sweetalert2';

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
  address = Array()
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
      this.birthdate = result[0].birthdate
      this.urole = result[0].urole_id
      this.email = result[0].email_address
      this.password = result[0].password

      for (let index = 0; index < result.length; index++) {
        this.address[index] = {addressid: result[index].address_id,address:result[index].address}
      }
    })
}
  updatecustomer(FormControlName: any): void {
    FormControlName.cus_id = this.cus_id
    FormControlName.email = this.email
    FormControlName.address = this.address
    console.log(FormControlName)
    this.subEditCus = this.customerService.updateCus(FormControlName).subscribe(
      (feedback) => {
        // alert(feedback.message);
        Swal.fire({
          icon: 'success',
          title: 'บันทึกสำเร็จ',
          text: 'แก้ไขสำเร็จ'
        }).then(() => {
          this.Router.navigate(['customer'])
        })

      }
    );
  }

  async update_address(position:any){


    const { value: text } = await Swal.fire({
      title: 'แก้ไขที่อยู่',
      input: 'textarea',
      inputPlaceholder: 'ใส่ที่อยู่...',
      inputValue: this.address[position].address,
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      inputValidator: (value) =>{
        let p = ''
        if(!value){
          p = "กรุณาใส่ที่อยู่"}
          return p

      }
    })
    if (text) {
      this.address[position].address = text
        }
      }

  ngOnDestroy(): void{
    this.subEditCus?.unsubscribe();
  }
}
