import { Subscriber, Subscription } from 'rxjs';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormControl, FormControlName, } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
subEditPro: Subscription | undefined;

alert:boolean = false;
editProduct= new FormGroup({
  pro_id: new FormControl(''),
  name: new FormControl(''),
  quantity: new FormControl(''),
  price: new FormControl(''),
  product_pic: new FormControl('')
})
  constructor(private productService: QuillingcardsService,private router:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.pro_id)
  this.productService.getProductByProId(this.router.snapshot.params.pro_id).subscribe((result)=>{
    console.log(result)
      this.editProduct= new FormGroup({
        pro_id: new FormControl(this.router.snapshot.params.pro_id),
        name: new FormControl(result[0].name),
        quantity: new FormControl(result[0].quantity),
        price: new FormControl (result[0].price),
        product_pic: new FormControl (result[0].product_pic)
      })
    })
  }
  updateproduct(FormControlName: any): void {
    console.log(FormControlName)
    this.subEditPro = this.productService.updatePro(FormControlName).subscribe(
      (feedback) => {
        alert(feedback.message);
        this.Router.navigate(['product'])
      }
    );
  }
ngOnDestroy(): void{
  this.subEditPro?.unsubscribe();
}


}
