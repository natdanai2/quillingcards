import { formatDate } from '@angular/common';
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
  status_id: any;
  order_not_use: any;

  keyword: string = '';

  check :any
  arrayLength:any

  totalRecords = ""
  totalRecordsnotuse = ""
  page = 1
  totalpaid = 0

  pre_array:any

  isshow = true

  openshow = 1

  date_start = ''
  date_end : any = formatDate(Date.now() + ( 3600 * 1000 * 24) ,'y/M/d','en-US')
  date_minus : any

  show_date : any

  constructor(private orderService: QuillingcardsService,private router: Router) { }

  ngOnInit(): void {
   this.pull()
  }
search(): void {
  //alert(this.keyword);
  if(this.keyword != ''){
  this.orderService.getOrderByKey2(this.keyword,this.date_start,this.date_end).subscribe(
    (order) => {
      order = order.filter((test:any, index:any, array:any) =>
        index === array.findIndex((findTest: { order_id: any; }) =>
        findTest.order_id === test.order_id
        )
     );
      this.order = order;
      for (let index = 0; index < order.length; index++) {
        this.totalpaid +=parseInt(this.order[index].amount_paid)
      }
    }
  );
  }
  else{
    this.pull()
  }
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
    this.totalpaid = 0
    this.order = Array()
    console.log(this.date_start +' '+ this.date_end)
    this.orderService.getOrderByKey2(this.keyword,this.date_start,this.date_end).subscribe(
      (order) => {
        order = order.filter((test:any, index:any, array:any) =>
        index === array.findIndex((findTest: { order_id: any; }) =>
        findTest.order_id === test.order_id
        )
     );
        this.order = order;
        for (let index = 0; index < order.length; index++) {
          this.totalpaid +=parseInt(this.order[index].amount_paid)
        }
      }
    );
  }
}
}
