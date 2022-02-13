import { QuillingcardsService } from './../shared/quillingcards.service';
import { product, order, customer, employee } from './../shared/quilling.model';
import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-realdashboard',
  templateUrl: './realdashboard.component.html',
  styleUrls: ['./realdashboard.component.css']
})
export class RealdashboardComponent implements OnInit {
  products: product[] | undefined;
  order: order[] | undefined;
  customer: order[] | undefined;
  employee: order[] | undefined;

  totalResults1: number | undefined;
  totalResults2: number | undefined;
  totalResults3: number | undefined;
  totalResults4: number | undefined;
  constructor(private productService: QuillingcardsService ) { }

  ngOnInit(): void {
    this.getproductcount();
    this.getordercount();
    this.getcustomercount();
    this.getemployeecount();
  }
  getproductcount(): void{
    this.productService.getProduct().subscribe(
      (product) => {
        this.totalResults1 = product.length;
      }
    );
  }
  getordercount(): void{
    this.productService.getOrder().subscribe(
      (order) => {
        this.totalResults2 = order.length;
      }
    );
  }
  getcustomercount(): void{
    this.productService.getCustomer().subscribe(
      (customer) => {
        this.totalResults3 = customer.length;
      }
    );
  }
  getemployeecount(): void{
    this.productService.getEmployee().subscribe(
      (employee) => {
        this.totalResults4 = employee.length;
      }
    );
  }
}

