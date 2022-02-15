import { order } from './../shared/quilling.model';
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

  constructor(private orderService: QuillingcardsService,private router: Router) { }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe(
      (order) => {
        //console.log(employee);
        for (let index = 0; index < order.length; index++) {

          if(order[index].order_id == order[1-index].order_id){
           order.splice(index,1)
            break;
          }

        }
        this.order = order;
        console.log(this.order)

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
