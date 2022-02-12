import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addproductUrl: string = 'http://localhost/quillingcards/api_product_add.php';

  subAddPro: Subscription | undefined;
  selectedFile = null;

  constructor(private productService: QuillingcardsService,private Router :Router, private http: HttpClient ) { }

  ngOnInit(): void {
  }
  addproduct(pro_value: any): void {
    this.subAddPro = this.productService.addProduct(pro_value).subscribe(
      (feedback) => {
        console.log(feedback)
        alert(feedback.message)
        this.Router.navigate(['product'])
      }
    )
  }

  ngOnDestroy(): void {
    this.subAddPro?.unsubscribe();

  }

}
