import { UpdateEmployeeComponent } from './../update-employee/update-employee.component';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { employee } from './../shared/quilling.model';
import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { ActivatedRoute ,Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  path: string = 'http://localhost/quillingcards';
  employee: any;

  cus_id:any
  id_status_users: any;
  employee_not_use: any;

  keyword: string = '';

  totalRecords = ""
  totalRecordsnotuse = ""
  page = 1

  isshow = true

  openshow = 1

  constructor(private employeeService: QuillingcardsService,private router:ActivatedRoute,private Router:Router ) { }

  ngOnInit(): void {
    this.pull()
  }
search(): void {
  if (this.keyword != '') {
    this.isshow = false
    if (this.openshow == 1) {
      this.employee_not_use = Array()
      this.employeeService.getEmployeeByKey(this.keyword).subscribe(
        (employee) => {
          this.employee = employee;
        }
      );
    } else {
      this.employee = Array()
      this.employeeService.getEmployeenotuseByKey(this.keyword).subscribe(
        (employee) => {
          console.log(employee)
          this.employee_not_use = employee;
        }
      );
    }
  } else {
    this.isshow = true
    this.pull()
  }
}
delEmp(em_id:any){
  this.employeeService.deleteEmployee(em_id,2).subscribe((success)=>{
    alert(success.message)
    this.pull()
  })
}
openEmp(em_id:any){
  this.employeeService.deleteEmployee(em_id,1).subscribe((success)=>{
    alert(success.message)
    this.pull()
  })

}

pull() {
  if (this.openshow == 1) {
    this.employee_not_use = Array()
    this.employeeService.getEmployee().subscribe(
      (employee) => {
        console.log(employee)
        this.employee = employee;
        this.totalRecords = employee.length
      }
    );
  } else {
    this.employee = Array()
    this.employeeService.getEmployee_not_use().subscribe(
      (employee) => {
        console.log(employee)
        this.employee_not_use = employee;
        this.totalRecordsnotuse = employee.length
      }
    );
  }
}

}


