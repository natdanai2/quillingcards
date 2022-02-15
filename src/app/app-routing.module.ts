import { OrderComponent } from './order/order.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RealdashboardComponent } from './realdashboard/realdashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CustomerComponent } from './customer/customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ProductComponent } from './product/product.component';
import { BilldetailComponent } from './billdetail/billdetail.component';

const routes: Routes = [
  {path:'',pathMatch: 'full',redirectTo: 'dashboard' },
  {path:'dashboard',component : RealdashboardComponent },
  {path:'employee',component : EmployeeComponent },
  {path:'addemployee',component : AddEmployeeComponent},
  {path:'updateemployee/:em_id',component : UpdateEmployeeComponent,},
  {path:'customer',component : CustomerComponent},
  {path:'addcustomer',component : AddCustomerComponent},
  {path:'updatecustomer/:cus_id',component : UpdateCustomerComponent,},
  {path:'product',component : ProductComponent},
  {path:'addproduct',component : AddProductComponent},
  {path:'updateproduct/:pro_id',component : UpdateProductComponent},
  {path:'order',component : OrderComponent},
  {path:'billdetail/:id',component : BilldetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
