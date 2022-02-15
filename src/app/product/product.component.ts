import { QuillingcardsService } from './../shared/quillingcards.service';
import { product } from './../shared/quilling.model';
import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  path: string = 'http://localhost/quillingcards/';
  product: any | undefined;
  keyword: string = '';

  constructor(private productService: QuillingcardsService,private router: Router ) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      (product) => {

        this.product = product;
        console.log(this.product)
      }
    );
  }
  search(): void {
    //alert(this.keyword);
    this.productService.getProductByKey(this.keyword).subscribe(
      (product) => {
        console.log(product);
        this.product = product;
      }
    );
  }
  delPro(pro_id:any,path:any){
    this.productService.deleteProduct(pro_id,path).subscribe(
      (feedbac) => {
        alert(feedbac.message)
        window.location.reload()
      }
    )
  }
}
