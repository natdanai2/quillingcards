import { product } from './../shared/quilling.model';
import { Subscriber, Subscription } from 'rxjs';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormControl, FormControlName, } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
subEditPro: Subscription | undefined;

alert:boolean = false;

  pro_id: any
  pro_name: any

  price_: any
  product_pic_: any
  select_file: any
  img_id : any
  new_path : any
  ispress = false

  constructor(private productService: QuillingcardsService,private router:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.pro_id)
  this.productService.getProductByProId(this.router.snapshot.params.pro_id).subscribe((result)=>{
    console.log(result)
      this.pro_id = result[0].product_code
      this.pro_name = result[0].name

      this.price_ = result[0].price
      this.product_pic_ = result[0].imgs_proname
      this.img_id = result[0].image_id
    })
  }
  onchange(event:any){
    this.ispress = true
    this.select_file = event.target.files[0];


  }
  up_img(){
    const form_data = new FormData()
    form_data.append('myFile',this.select_file,this.select_file.name)
    form_data.append('img_id',this.img_id )
    form_data.append('img_new_name',this.pro_name)
    form_data.append('img_path',this.product_pic_)
    this.productService.updateProduct_img(form_data).subscribe(
      (img) => {}
      )
  }
  updateproduct(form: any): void {
      if(this.ispress == true)
        {
          this.up_img()
      }

      form.pro_id = this.pro_id
        this.productService.updatePro(form).subscribe(
          (feedback) => {
            // alert(feedback.message)
            Swal.fire({
              icon: 'success',
              title: 'บันทึกสำเร็จ',
              text: 'แก้ไขสินค้าสำเร็จ'
            }).then(() => {
              this.Router.navigate(['product'])
            })
          }
        );

      }

}
