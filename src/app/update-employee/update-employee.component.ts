import { Subscriber, Subscription } from 'rxjs';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormControl, FormControlName, } from '@angular/forms';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
subEditEmp: Subscription | undefined;

alert:boolean = false;
editEmployee= new FormGroup({
  em_id: new FormControl(''),
  name: new FormControl(''),
  phone: new FormControl(''),
  address: new FormControl(''),
  birthdate: new FormControl(''),
  perid: new FormControl('')
})

constructor(private employeeService: QuillingcardsService,private router:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.em_id)
  this.employeeService.getEmployeeByEmpId(this.router.snapshot.params.em_id).subscribe((result)=>{
    console.log(result)
      this.editEmployee= new FormGroup({
        em_id: new FormControl(this.router.snapshot.params.em_id),
        name: new FormControl(result[0].name),
        phone: new FormControl(result[0].phone),
        address: new FormControl (result[0].address),
        birthdate: new FormControl (result[0].birthdate),
        perid: new FormControl (result[0].permission)
      })
    })
  }
  updateemployee(FormControlName: any): void {
    console.log(FormControlName)
    this.subEditEmp = this.employeeService.updateEmp(FormControlName).subscribe(
      (feedback) => {
        alert(feedback.message);
        this.Router.navigate(['employee'])
      }
    );
  }
ngOnDestroy(): void{
  this.subEditEmp?.unsubscribe();
}

}


