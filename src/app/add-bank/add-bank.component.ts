import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuillingcardsService } from '../shared/quillingcards.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {
  addbankUrl: string = 'http://localhost/quillingcards/api_bank_add.php';

  subAddBank: Subscription | undefined;

  constructor(private bankService: QuillingcardsService,private Router :Router) { }

  ngOnInit(): void {
  }
  addbank(bank_value: any): void {
    this.subAddBank = this.bankService.addBank(bank_value).subscribe(
      (feedback) => {
        // alert(feedback.message);
        Swal.fire({
          icon: 'success',
          title: 'บันทึกสำเร็จ',
          text: 'เพิ่มธนาคารสำเร็จ',

        }).then(() => {
          this.Router.navigate(['bank'])
        })

      }
    );
  }

  ngOnDestroy(): void {
    this.subAddBank?.unsubscribe();

  }

}
