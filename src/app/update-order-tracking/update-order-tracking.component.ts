import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { ActivatedRoute,Router } from '@angular/router';

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

  constructor(private orderService: QuillingcardsService,private router:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.order_id)
    this.orderService.getOrderByOrderId(this.router.snapshot.params.order_id).subscribe((result)=>{
      console.log(result)
        this.order_id = result[0].order_id
        this.tracking = result[0].tracking
    })
  }
  updateordertracking(FormControlName: any): void {
    console.log(FormControlName)
    this.subEditOrder = this.orderService.updateOrdertracking(FormControlName).subscribe(
      (feedback) => {
        alert(feedback.message);
        this.Router.navigate(['order'])
      }
    );
  }
  ngOnDestroy(): void{
    this.subEditOrder?.unsubscribe();
  }
}
