import { RouterModule } from '@angular/router';
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
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CustomerComponent } from './customer/customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { OrderComponent } from './order/order.component';
import { BilldetailComponent } from './billdetail/billdetail.component';
import { NgxPrintModule } from 'ngx-print';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateOrderTrackingComponent } from './update-order-tracking/update-order-tracking.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AdtobePipe } from './shared/adtobe.pipe';
import { BankManageComponent } from './bank-manage/bank-manage.component';
import { BankComponent } from './bank/bank.component';
import { AddBankComponent } from './add-bank/add-bank.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxMaskModule,IConfig } from 'ngx-mask';
import { DateFnsModule } from 'ngx-date-fns';
import { th } from 'date-fns/locale';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import {
  FormatPipeModule,
  MinPipeModule,
  MaxPipeModule,
  FormatDistanceToNowPipeModule,
  WeekdayNamePipeModule,
  ParsePipeModule
} from 'ngx-date-fns';
import { Adtobe2Pipe } from './shared/adtobe2.pipe';

const thaiConfig = new DateFnsConfigurationService();
thaiConfig.setLocale(th);

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    DashboardComponent,
    RealdashboardComponent,
    ProductComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    CustomerComponent,
    UpdateCustomerComponent,
    AddProductComponent,
    UpdateProductComponent,
    OrderComponent,
    BilldetailComponent,
    UpdateOrderTrackingComponent,
    CustomerDetailComponent,
    EmployeeDetailComponent,
    AdtobePipe,
    BankManageComponent,
    BankComponent,
    AddBankComponent,
    OrderSuccessComponent,
    Adtobe2Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    RouterModule,
    SweetAlert2Module.forRoot(),
    NgxPaginationModule,
    BrowserModule,
    DateFnsModule.forRoot(),
    FormatPipeModule,
    MinPipeModule,
    MaxPipeModule,
    FormatDistanceToNowPipeModule,
    WeekdayNamePipeModule,
    ParsePipeModule,
    NgxMaskModule.forRoot(maskConfig)

  ],
  providers: [
    { provide: DateFnsConfigurationService, useValue: thaiConfig } // <-- All pipes in French by default
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
