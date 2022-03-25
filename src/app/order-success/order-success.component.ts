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
  totalpaid = 0

  pre_array:any

  isshow = true

  openshow = 1

  constructor(private orderService: QuillingcardsService,private router: Router) { }

  ngOnInit(): void {
    this.pull()
  }
  search(): void {
    //alert(this.keyword);
    if(this.keyword != ''){
      this.totalpaid = 0
      this.orderService.getOrderByKey2(this.keyword).subscribe(
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
      this.totalpaid = 0
      this.order = Array()
      this.orderService.getOrderselect_not_use().subscribe(
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
