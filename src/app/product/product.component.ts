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
  path: string = 'http://localhost/quillingcards';
  product: product[] | undefined;
  keyword: string = '';

  constructor(private productService: QuillingcardsService,private router: Router ) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      (product) => {
        //console.log(employee);
        this.product = product;
      }
    );
  }
  search(): void {
    //alert(this.keyword);
    this.productService.getProductByKey(this.keyword).subscribe(
      (product) => {
        this.product = product;
      }
    );
  }
  delPro(pro_id:any){
    this.productService.deleteProduct(pro_id).subscribe(),
     window.location.reload()

  }



  }
