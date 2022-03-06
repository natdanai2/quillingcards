import { QuillingcardsService } from './../shared/quillingcards.service';
import { product } from './../shared/quilling.model';
import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  path: string = 'http://localhost/quillingcards/';
  product: any | undefined;
  keyword: string = '';

  totalRecords = ""
  page = 1

  isshow = true

  openshow = 1

  constructor(private productService: QuillingcardsService,private router: Router ) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      (product) => {
        console.log(product)
        this.product = product;
        this.totalRecords = product.length
        // console.log(this.product)
      }
    );
  }
  search(): void {
    this.productService.getProductByKey(this.keyword).subscribe(
      (product) => {
        console.log(product);
        this.product = product;
      }
    );
  }

}
