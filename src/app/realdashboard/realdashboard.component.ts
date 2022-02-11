import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realdashboard',
  templateUrl: './realdashboard.component.html',
  styleUrls: ['./realdashboard.component.css']
})
export class RealdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dash_product = './assets/img/box.png';
  dash_order = './assets/img/list.png';
  dash_customer = './assets/img/customer.png';
  dash_employee = './assets/img/employee.png';
}
