import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Subscriber, Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addproductUrl: string = 'http://localhost/quillingcards/api_product_add.php';

  subAddPro: Subscription | undefined;
  selectedFile = null;
  select_file: File | any
  img_id = 0

  constructor(private productService: QuillingcardsService,private Router :Router, private http: HttpClient ) { }

  ngOnInit(): void {
  }
  addproduct(pro_value: any): void {
    const form_data = new FormData()
      form_data.append('myFile',this.select_file,this.select_file.name)
      form_data.append('new_name',pro_value.name)

      console.log(form_data)
      this.subAddPro = this.productService.addProduct(pro_value).subscribe(
        (feedback) => {
          form_data.append('proid',feedback.pro_id)
          this.productService.AddPro_img(form_data).subscribe(
            (result) => {
              // alert(feedback.message)
              Swal.fire({
                icon: 'success',
                title: 'บันทึกสำเร็จ',
                text: 'เพิ่มสินค้าสำเร็จ',
              }).then(() => {
                this.Router.navigate(['product'])
              })


            }
          )
        }
      )


  }

  ngOnDestroy(): void {
    this.subAddPro?.unsubscribe();

  }
  onChange(event: any ) {
    console.log(event)
    this.select_file = event.target.files[0];
    console.log(this.select_file.name)
  }


}

