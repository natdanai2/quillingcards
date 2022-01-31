import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { employee } from './quilling.model';

@Injectable({
  providedIn: 'root'
})
export class QuillingcardsService {
  employeeUrl: string = 'http://localhost/quillingcards/get_employee_emidV2.php';

  constructor(private http: HttpClient) { }

getEmployee(): Observable<employee[]>{
  return this.http.get<employee[]>(this.employeeUrl);
}
}

