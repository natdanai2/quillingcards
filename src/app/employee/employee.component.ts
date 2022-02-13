import { UpdateEmployeeComponent } from './../update-employee/update-employee.component';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { employee } from './../shared/quilling.model';
import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  path: string = 'http://localhost/quillingcards';
  employee: employee[] | undefined;
  keyword: string = '';

  constructor(private employeeService: QuillingcardsService,private router: Router ) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(
      (employee) => {
        //console.log(employee);
        this.employee = employee;
      }
    );
  }
search(): void {
  //alert(this.keyword);
  this.employeeService.getEmployeeByKey(this.keyword).subscribe(
    (employee) => {
      this.employee = employee;
    }
  );
}
delEmp(em_id:any){
  this.employeeService.deleteEmployee(em_id).subscribe(),
   window.location.reload()

}


}


