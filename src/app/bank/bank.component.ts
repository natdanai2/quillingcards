import { bank } from './../shared/quilling.model';
import { UpdateEmployeeComponent } from './../update-employee/update-employee.component';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { ActivatedRoute ,Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  path: string = 'http://localhost/quillingcards';
  bank: any;

  bank_id:any
  id_status_bank: any;
  bank_not_use: any;

  keyword: string = '';

  totalRecords = ""
  totalRecordsnotuse = ""
  page = 1

  isshow = true

  openshow = 1

  constructor(private bankService: QuillingcardsService,private router:ActivatedRoute,private Router:Router ) { }

  ngOnInit(): void {
    this.pull()
  }
  search(): void {
    if (this.keyword != '') {
      this.isshow = false
      if (this.openshow == 1) {
        this.bank_not_use = Array()
        this.bankService.getBankByKey(this.keyword).subscribe(
          (bank) => {
            this.bank = bank;
          }
        );
      } else {
        this.bank = Array()
        this.bankService.getBanknotuseByKey(this.keyword).subscribe(
          (bank) => {
            console.log(bank)
            this.bank_not_use = bank;
          }
        );
      }
    } else {
      this.isshow = true
      this.pull()
    }
  }

  delBank(bank_id:any){
    this.bankService.deleteBank(bank_id,2).subscribe((success)=>{
      // alert(success.message)
      Swal.fire({
        icon: 'success',
        title: 'บันทึกสำเร็จ',
        text: 'ปิดการใช้งานธนาคารนี้',

      }).then(() => {
        this.pull()
      })

    })
  }
  openBank(bank_id:any){
    this.bankService.deleteBank(bank_id,1).subscribe((success)=>{
      // alert(success.message)
      Swal.fire({
        icon: 'success',
        title: 'บันทึกสำเร็จ',
        text: 'เปิดการใช้งานธนาคารนี้',

      }).then(() => {
        this.pull()
      })
    })

  }

  pull() {
    if (this.openshow == 1) {
      this.bank_not_use = Array()
      this.bankService.getBank().subscribe(
        (bank) => {
          console.log(bank)
          this.bank = bank;
          this.totalRecords = bank.length
        }
      );
    } else {
      this.bank = Array()
      this.bankService.getBank_not_use().subscribe(
        (bank) => {
          console.log(bank)
          this.bank_not_use = bank;
          this.totalRecordsnotuse = bank.length
        }
      );
    }
  }
}
