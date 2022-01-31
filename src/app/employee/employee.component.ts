import { employee } from './../shared/quilling.model';
import { Component, OnInit } from '@angular/core';
import { QuillingcardsService } from '../shared/quillingcards.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  path: string = 'http://localhost/quillingcards';
  employee: employee[] | undefined;

  constructor(private employeeService: QuillingcardsService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(
      (employee) => {
        //console.log(employee);
        this.employee = employee;
      }
    );
  }

}


