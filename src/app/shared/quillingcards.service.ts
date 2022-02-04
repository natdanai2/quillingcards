import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { employee } from './quilling.model';

@Injectable({
  providedIn: 'root'
})
export class QuillingcardsService {
  employeeUrl: string = 'http://localhost/quillingcards/get_employee_emidV2.php';
  addemployeeUrl: string = 'http://localhost/quillingcards/api_add_employee.php';

  constructor(private http: HttpClient) { }

getEmployee(): Observable<employee[]>{
  return this.http.get<employee[]>(this.employeeUrl);
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


}

