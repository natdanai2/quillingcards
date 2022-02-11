import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { employee } from './quilling.model';
import { customer } from './quilling.model';

@Injectable({
  providedIn: 'root'
})
export class QuillingcardsService {
  employeeUrl: string = 'http://localhost/quillingcards/get_employee_emidV2.php';
  addemployeeUrl: string = 'http://localhost/quillingcards/api_add_employee.php';
  deleteemployeeUrl: string = 'http://localhost/quillingcards/api_del_employee.php';
  updateemployeeUrl: string = 'http://localhost/quillingcards/api_update_employee.php';

  customerUrl: string = 'http://localhost/quillingcards/get_customer_cusidV2.php';
  addcustomerUrl: string = 'http://localhost/quillingcards/api_add_customer.php';
  deletecustomerUrl: string = 'http://localhost/quillingcards/api_del_customer.php';
  updatecustomerUrl: string = 'http://localhost/quillingcards/api_update_customer.php';

  constructor(private http: HttpClient) { }

getEmployee(): Observable<employee[]>{
  return this.http.get<employee[]>(this.employeeUrl);
}
getEmployeeByEmpId(em_id:any): Observable<employee[]>{
  const param = {
    'em_id' : em_id
 };
 return this.http.get<employee[]>(this.employeeUrl, {params: param});;
}

getEmployeeByKey(keyword: string): Observable<employee[]>{
 const param = {
    'keyword' : keyword
 };
 return this.http.get<employee[]>(this.employeeUrl, {params: param});
}

addEmployee(emp_value: any): Observable<any>{
  const empHeader = {'Content-Type':'application/json'};
  return this.http.post<any>(this.addemployeeUrl, emp_value, {headers: empHeader});

}
deleteEmployee(id_emp: any): Observable<any>{
  const param = {
    'em_id' : id_emp
 };
 return this.http.get<any[]>(this.deleteemployeeUrl, {params: param});
}
updateEmp(formValue: any): Observable<any>{
  const edit_empHeader = {'Content-Type':'application/json'};
    return this.http.put<any>(this.updateemployeeUrl,formValue,{headers: edit_empHeader});
  }


  getCustomer(): Observable<customer[]>{
    return this.http.get<customer[]>(this.customerUrl);
  }
  getCustomerByCusId(cus_id:any): Observable<customer[]>{
    const param = {
      'cus_id' : cus_id
   };
   return this.http.get<customer[]>(this.customerUrl, {params: param});;
  }
  getCustomerByKey(keyword: string): Observable<customer[]>{
    const param = {
       'keyword' : keyword
    };
    return this.http.get<customer[]>(this.customerUrl, {params: param});
   }
  addCustomer(cus_value: any): Observable<any>{
    const cusHeader = {'Content-Type':'application/json'};
    return this.http.post<any>(this.addcustomerUrl, cus_value, {headers: cusHeader});
  }
  deleteCustomer(id_cus: any): Observable<any>{
    const param = {
      'cus_id' : id_cus
   };
   return this.http.get<any[]>(this.deletecustomerUrl, {params: param});
  }
  updateCus(formValue: any): Observable<any>{
    const edit_cusHeader = {'Content-Type':'application/json'};
      return this.http.put<any>(this.updatecustomerUrl,formValue,{headers: edit_cusHeader});
    }
}

