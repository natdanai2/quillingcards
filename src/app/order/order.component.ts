import { order, product } from './../shared/quilling.model';
import { Component, OnInit } from '@angular/core';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  path: string = 'http://localhost/quillingcards';
  order: any;
  keyword: string = '';

  check :any

  totalRecords = ""
  page = 1

  isshow = true

  openshow = 1

  constructor(private orderService: QuillingcardsService,private router: Router) { }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe(
      (order) => {
        console.log(order)
        this.order = order;
        this.totalRecords = order.length
      }
    );
  }
search(): void {
  //alert(this.keyword);
  this.orderService.getOrderByKey(this.keyword).subscribe(
    (order) => {
      this.order = order;
    }
  );
}
delOrder(order_id:any){
  this.orderService.deleteOrder(order_id).subscribe()
  window.location.reload()

}
}
