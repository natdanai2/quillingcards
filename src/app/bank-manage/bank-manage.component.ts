import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { QuillingcardsService } from './../shared/quillingcards.service';

@Component({
  selector: 'app-bank-manage',
  templateUrl: './bank-manage.component.html',
  styleUrls: ['./bank-manage.component.css']
})
export class BankManageComponent implements OnInit {
subEditBank: Subscription | undefined;

alert:boolean = false;

id_bank:any
id_bank_list:any
account_number:any
account_name:any

  constructor(private bankService: QuillingcardsService,private router:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id_bank)
    this.bankService.getBankByBankId(this.router.snapshot.params.id_bank).subscribe((result)=>{
      console.log(result)
        this.id_bank = result[0].id_bank
        this.id_bank_list = result[0].id_bank_list
        this.account_number = result[0].account_number
        this.account_name = result[0].account_name
      })
  }
  updatebank(FormControlName: any): void {
    // FormControlName.email = this.email
    FormControlName.id_bank = this.id_bank
    console.log(FormControlName)
    this.subEditBank = this.bankService.updateBank(FormControlName).subscribe(
      (feedback) => {
        alert(feedback.message);
        this.Router.navigate(['bank'])
      }
    );
  }

ngOnDestroy(): void{
  this.subEditBank?.unsubscribe();
}

}
