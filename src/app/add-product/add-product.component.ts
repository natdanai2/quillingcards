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
      this.productService.AddPro_img(form_data).subscribe(
        (result) => {
          pro_value.img_id = result.img_id
          console.log(pro_value.img_id)
          this.subAddPro = this.productService.addProduct(pro_value).subscribe(
            (feedback) => {
              console.log(feedback)
              alert(feedback.message)
              this.Router.navigate(['product'])
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

