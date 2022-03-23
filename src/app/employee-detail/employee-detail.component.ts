import { customer } from './../shared/quilling.model';
import { Component, OnInit } from '@angular/core';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Subscriber, Subscription } from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  path: string = 'http://localhost/quillingcards';
  subEditEmp: Subscription | undefined;

  alert:boolean = false;

  cus_id:any
  name : any
  phone: any
  address: any
  birthdate: any
  urole: any
  email:any
  password:any
  users_status:any

  detail:any = ""

  constructor(private employeeService: QuillingcardsService,private router:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.em_id)
    this.employeeService.getEmployeedetailByEmpId(this.router.snapshot.params.em_id).subscribe((result)=>{
      console.log(result)
      this.detail=result[0]
      this.address=result
  })
}
ngOnDestroy(): void{
  this.subEditEmp?.unsubscribe();
}
}
