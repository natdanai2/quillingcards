import { Component, OnInit } from '@angular/core';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Router, RouterModule } from '@angular/router';
import { formatDate } from '@angular/common';

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

  date_start : any = formatDate(Date.now(),'y/M/d','en-US')
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
      this.totalpaid = 0
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
      this.totalpaid = 0
      this.order = Array()
      // if(this.date_start == this.date_end){
      //   this.date_end = formatDate((Date.parse(this.date_end)) +  ( 3600 * 1000 * 24),'y/M/d','en-US')
      // }
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
  set_date(set:any){
    if(set == '1'){
      this.date_start = formatDate(Date.now(),'y/M/d','en-US')
    }
    else if (set == '2'){
      this.date_start = ''
    }
    this.pull()
  }

  }
