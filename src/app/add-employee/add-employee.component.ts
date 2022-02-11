import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuillingcardsService } from './../shared/quillingcards.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addemployeeUrl: string = 'http://localhost/quillingcards/api_add_employee.php';

  subAddEmp: Subscription | undefined;

  constructor(private employeeService: QuillingcardsService,private Router :Router) { }

  ngOnInit(): void {
  }
addemployee(emp_value: any): void {
  this.subAddEmp = this.employeeService.addEmployee(emp_value).subscribe(
    (feedback) => {
      alert(feedback.message);
      this.Router.navigate(['employee'])
    }
  );
}

ngOnDestroy(): void {
  this.subAddEmp?.unsubscribe();

}
}
