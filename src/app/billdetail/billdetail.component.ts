import { order, customer, product, employee } from './../shared/quilling.model';
import { Component, OnInit } from '@angular/core';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-billdetail',
  templateUrl: './billdetail.component.html',
  styleUrls: ['./billdetail.component.css']
})
export class BilldetailComponent implements OnInit {
  path: string = 'http://localhost/quillingcards';
  order: any
  customer: customer[] | undefined;
  employee: employee[] | undefined;
  orderid: any
  product: any
  product_explode: any
  keyword: string = '';
  sum: number = 0 ;
  sum_total:number = 0
  check:any

  totalDate: string ='';
  totalCustomername: string ='';
  totaladdress: string ='';
  totalemail: string ='';
  totalprice: string ='';

  product_code : string ='';
  product_name : string ='';
  qty : string ='';
  product_price : string ='';
  total_price : string ='';
  image : string='';

  constructor(private orderService: QuillingcardsService,private customerService: QuillingcardsService,private employeeService: QuillingcardsService,private router: Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.orderService.getOrderByOrderId(this.route.snapshot.params['id']).subscribe(
      (order) => {
        this.order = order
        console.log(order)
        this.orderid = order[0].order_id
        this.product_explode = order[0].products
        this.totalCustomername = order[0].name
        this.totaladdress = order[0].address
        this.totalemail = order[0].email
        this.totalDate = order[0].date
        this.totalprice = order[0].totalprice

        this.product_code = order[0].product_code
        this.product_name = order[0].product_name
        this.qty = order[0].qty
        this.product_price = order[0].product_price
        this.total_price = order[0].total_price
        this.image = order[0].image
      }
    )
  }
}
