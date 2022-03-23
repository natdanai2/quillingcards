import { Component, OnInit } from '@angular/core';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  path: string = 'http://localhost/quillingcards';
  order: any;
  status_id: any;
  order_not_use: any;

  keyword: string = '';

  check :any
  arrayLength:any

  totalRecords = ""
  totalRecordsnotuse = ""
  page = 1

  pre_array:any

  isshow = true

  openshow = 1

  constructor(private orderService: QuillingcardsService,private router: Router) { }

  ngOnInit(): void {
    this.pull()
  }
  search(): void {
    //alert(this.keyword);
    this.orderService.getOrderByKey(this.keyword).subscribe(
      (order) => {
        order = order.filter((test:any, index:any, array:any) =>
          index === array.findIndex((findTest: { order_id: any; }) =>
          findTest.order_id === test.order_id
          )
       );
        this.order = order;
      }
    );
  }

  pull() {
    if (this.openshow == 1) {
      this.order_not_use = Array()
      this.orderService.getOrder().subscribe(
        (order) => {
          order = order.filter((test:any, index:any, array:any) =>
          index === array.findIndex((findTest: { order_id: any; }) =>
          findTest.order_id === test.order_id
          )
       );
          this.order = order;
          this.totalRecords = order.length
        }
      );
    } else {
      this.order = Array()
      this.orderService.getOrderselect_not_use().subscribe(
        (order) => {
          order = order.filter((test:any, index:any, array:any) =>
          index === array.findIndex((findTest: { order_id: any; }) =>
          findTest.order_id === test.order_id
          )
       );
          this.order_not_use = order;
          this.totalRecordsnotuse = order.length
        }
      );
    }
  }

  }
