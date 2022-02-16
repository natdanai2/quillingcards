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
  order: any| undefined;
  customer: customer[] | undefined;
  employee: employee[] | undefined;
  product: product[] | undefined;
  keyword: string = '';
  sum: number = 0 ;
  sum_total:number = 0
  check:any

  totalDate: string ='';
  totalCustomername: string ='';
  totaladdress: string ='';
  totalemail: string ='';

  totalEmployeename: string ='';

  constructor(private orderService: QuillingcardsService,private customerService: QuillingcardsService,private employeeService: QuillingcardsService,private router: Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.orderService.getOrderByOrderId(this.route.snapshot.params['id']).subscribe(
      (order) => {
        console.log(order);
        for (let index = 0; index < order.length; index++) {

          if(order[index].picture_payment == order[1-index].picture_payment ){
            order[index].picture_payment = ''
            //order.splice(index,1)
          }
          this.sum = parseInt( order[index].price)*parseInt(order[index].quantity)
          this.sum_total = this.sum_total + this.sum

        }
        this.order = order;
        this.totalEmployeename = order[0].Employee_name
        this.totalDate = order[0].date
        this.totalCustomername = order[0].Customer_name
        this.totaladdress = order[0].address
        this.totalemail = order[0].email_address


      }

    )

  }
}
