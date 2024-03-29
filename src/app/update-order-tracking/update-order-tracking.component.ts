import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-order-tracking',
  templateUrl: './update-order-tracking.component.html',
  styleUrls: ['./update-order-tracking.component.css']
})
export class UpdateOrderTrackingComponent implements OnInit {
  subEditOrder: Subscription | undefined;

  alert:boolean = false;
  order_id:any
  tracking:any
  trans_id:any

  constructor(private orderService: QuillingcardsService,private router:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {

    console.log(this.router.snapshot.params.order_id)
    this.orderService.getOrderByOrderId(this.router.snapshot.params.order_id).subscribe((result)=>{
      console.log(result)
        this.order_id = result[0].order_id
        this.trans_id = result[0].trans_id
        this.tracking = result[0].tracking
    })
  }
  updateordertracking(FormControlName: any): void {
    FormControlName.order_id = this.order_id
    console.log(FormControlName)
    this.subEditOrder = this.orderService.updateOrdertracking(FormControlName).subscribe(
      (result) => { if(result.status == "Success"){
        // console.log(result)
        // alert(result.message);
        Swal.fire({
          icon: 'success',
          title: 'บันทึกสำเร็จ',
          text: 'เพิ่ม tracking สำเร็จ',

        }).then(() => {
          this.Router.navigate(['order'])
        })
      }
      else {
        console.log(result)
        alert(result.message);
        Swal.fire({
          icon: 'error',
          title: result.message,
          text: 'เพิ่ม tracking ไม่สำเร็จ',

        }).then(() => {
          this.Router.navigate(['order'])
        })
      }
      }
    );
  }
  ngOnDestroy(): void{
    this.subEditOrder?.unsubscribe();
  }
}
