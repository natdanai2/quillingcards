import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RealdashboardComponent } from './realdashboard/realdashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  {path:'dashboard',component : RealdashboardComponent },
  {path:'employee',component : EmployeeComponent },
  {path:'addemployee',component : AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
