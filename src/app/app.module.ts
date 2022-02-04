import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RealdashboardComponent } from './realdashboard/realdashboard.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    DashboardComponent,
    RealdashboardComponent,
    ProductComponent,
    EmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
