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
  order: order[] | undefined;
  keyword: string = '';

  constructor(private orderService: QuillingcardsService,private router: Router) { }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe(
      (order) => {
        //console.log(employee);
        this.order = order;
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

}
