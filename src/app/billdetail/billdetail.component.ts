import { order, customer, product, employee } from './../shared/quilling.model';
import { Component, OnInit } from '@angular/core';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { DateFnsModule } from 'ngx-date-fns';
import { th } from 'date-fns/locale';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { add } from 'date-fns';


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
  detail_order : any
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
  amount_paid : any

  option ={
    locale:th
  }
  datee1 :any

  constructor(private orderService: QuillingcardsService,private customerService: QuillingcardsService,private employeeService: QuillingcardsService,private router: Router,private route :ActivatedRoute) { }

  ngOnInit(): void {


     console.log(this.datee1)

    this.orderService.getOrdertotal(this.route.snapshot.params['id'],'1').subscribe(
      (order) => {
        this.order = order
        console.log(order)
        this.orderid = order[0].order_id
        this.product_explode = order[0].products
        this.totalCustomername = order[0].name
        this.totaladdress = order[0].address
        this.totalemail = order[0].email_address
        this.totalDate = order[0].date
        this.totalprice = order[0].total_price

        this.product_code = order[0].product_code
        this.product_name = order[0].product_name
        this.qty = order[0].qty
        this.amount_paid = order[0].amount_paid
        this.product_price = order[0].product_price

        this.image = order[0].image
        this.orderService.getOrdertotal(this.route.snapshot.params['id'],'2').subscribe(orr=>{
          console.log(orr);

          this.total_price = orr[0].total_price
        })
        this.datee1 = format(add(new Date(this.totalDate),{years:543}), 'dd MMMM yyyy',{locale:th})
        this.detail_order = order
        var result = order.reduce(function(_this:number, val:any|undefined) {
          return _this + Number(val.log_Product_Sum)
        }, 0);
        this.sum = result
      }
    )
  }
  updateStatus(order_id:any){

      // alert(success.message)
      Swal.fire({
        title: 'Are you sure?',
        text: "คุณต้องการยืนยันออเดอร์นี้หรือไม่?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: "CANCEL"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Success!',
            'ยืนยันออเดอร์สำเร็จ.',
            'success'
          ).then(() => {
            this.orderService.updateOrderStatus(order_id,2).subscribe((success)=>{
              this.router.navigate(['order'])
            })
          })
        }
        // else if (result.isDismissed)
        // result.dismiss === Swal.DismissReason.cancel
        // Swal.fire(
        //   'Cancel!',
        //   'ยกเลิกการยืนยันสำเร็จ.',
        //   'error'
        // ).then(() => {
        //   this.router.navigate(['order'])
        // })
      })
  }
}
