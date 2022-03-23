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

  pro_id:any
  id_status_product: any;
  product_not_use: any;

  totalRecords = ""
  totalRecordsnotuse = ""
  page = 1

  isshow = true

  openshow = 1

  constructor(private productService: QuillingcardsService,private router:ActivatedRoute,private Router:Router ) { }

  ngOnInit(): void {
    this.pull()
  }
  search(): void {
    if (this.keyword != '') {
      this.isshow = false
      if (this.openshow == 1) {
        this.product_not_use = Array()
        this.productService.getProductByKey(this.keyword).subscribe(
          (product) => {
            this.product = product;
          }
        );
      } else {
        this.product = Array()
        this.productService.getProductnotuseByKey(this.keyword).subscribe(
          (product) => {
            console.log(product)
            this.product_not_use = product;
          }
        );
      }
    } else {
      this.isshow = true
      this.pull()
    }
  }

  delPro(pro_id:any){
    this.productService.deleteProduct(pro_id,2).subscribe((success)=>{
      alert(success.message)
      this.pull()
    })
  }
  openPro(pro_id:any){
    this.productService.deleteProduct(pro_id,1).subscribe((success)=>{
      alert(success.message)
      this.pull()
    })

  }

  pull() {
    if (this.openshow == 1) {
      this.product_not_use = Array()
      this.productService.getProduct().subscribe(
        (product) => {
          console.log(product)
          this.product = product;
          this.totalRecords = product.length
        }
      );
    } else {
      this.product = Array()
      this.productService.getProduct_not_use().subscribe(
        (product) => {
          console.log(product)
          this.product_not_use = product;
          this.totalRecordsnotuse = product.length
        }
      );
    }
  }

}
