import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { employee} from './quilling.model';
import { customer } from './quilling.model';
import { product } from './quilling.model';
import { order } from './quilling.model';
import { bank } from './quilling.model';

import { format,add } from 'date-fns';
import { th } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class QuillingcardsService {
  employeeUrl: string = 'http://localhost/quillingcards/get_employee_emidV2.php';
  addemployeeUrl: string = 'http://localhost/quillingcards/api_employee_add.php';
  deleteemployeeUrl: string = 'http://localhost/quillingcards/api_employee_del.php';
  updateemployeeUrl: string = 'http://localhost/quillingcards/api_employee_update.php';
  employeenotuseUrl: string = 'http://localhost/quillingcards/api_employee_change_status.php';
  employeedetailUrl: string = 'http://localhost/quillingcards/api_employee_detail.php';

  customerUrl: string = 'http://localhost/quillingcards/get_customer_cusidV2.php';
  addcustomerUrl: string = 'http://localhost/quillingcards/api_customer_add.php';
  deletecustomerUrl: string = 'http://localhost/quillingcards/api_customer_del.php';
  updatecustomerUrl: string = 'http://localhost/quillingcards/api_customer_update.php';
  customernotuseUrl: string = 'http://localhost/quillingcards/api_customer_change_status.php';
  customerdetailUrl: string = 'http://localhost/quillingcards/api_customer_detail.php';

  productUrl: string = 'http://localhost/quillingcards/get_product_proidV2.php';
  addproductUrl: string = 'http://localhost/quillingcards/api_product_add.php';
  deleteproductUrl: string = 'http://localhost/quillingcards/api_product_del.php';
  updateproductUrl: string = 'http://localhost/quillingcards/api_product_update.php';
  updateproduct_imgurl: string = 'http://localhost/quillingcards/api_update_img.php';
  productnotuseUrl: string = 'http://localhost/quillingcards/api_product_change_status.php';

  orderUrl: string = 'http://localhost/quillingcards/get_order_orderidV2.php';
  deleteorderUrl: string = 'http://localhost/quillingcards/api_order_del.php';
  orderselectUrl: string = 'http://localhost/quillingcards/api_order_count_dashboard.php';
  orderselectnotuseUrl: string = 'http://localhost/quillingcards/get_order_change_status.php';

  bankUrl: string = 'http://localhost/quillingcards/get_bank_idV2.php';
  banknotuseUrl: string = 'http://localhost/quillingcards/api_bank_change_status.php';
  addbankUrl: string = 'http://localhost/quillingcards/api_bank_add.php';
  updatebankUrl:string = 'http://localhost/quillingcards/api_bank_update.php';
  deletebankUrl:string = 'http://localhost/quillingcards/api_bank_del.php';

  updateemployeestatusUrl: string = 'http://localhost/quillingcards/api_employee_update_status.php';

  updateordertrackingUrl: string = 'http://localhost/quillingcards/api_order_update_tracking.php';

  updateorderstatus: string = 'http://localhost/quillingcards/api_order_update_status.php';

  imgUrl: string = 'http://localhost/quillingcards/api_add_img.php';

  constructor(private http: HttpClient) { }

getEmployee(): Observable<any>{
  return this.http.get<any[]>(this.employeeUrl);
}

getEmployee_not_use(): Observable<any>{
  return this.http.get<any[]>(this.employeenotuseUrl);
}

getEmployeeByEmpId(em_id:any): Observable<any[]>{
  const param = {
    'em_id' : em_id
 };
 return this.http.get<any[]>(this.employeeUrl, {params: param});;
}

getEmployeedetailByEmpId(em_id:any): Observable<any[]>{
  const param = {
    'em_id' : em_id
 };
 return this.http.get<any[]>(this.employeedetailUrl, {params: param});;
}

getEmployeeByKey(keyword: string): Observable<employee[]>{
 const param = {
    'keyword' : keyword
 };
 return this.http.get<employee[]>(this.employeeUrl, {params: param});
}

getEmployeenotuseByKey(keyword: string): Observable<employee[]>{
  const param = {
     'keyword' : keyword
  };
  return this.http.get<employee[]>(this.employeenotuseUrl, {params: param});
 }

addEmployee(emp_value: any): Observable<any>{
  const empHeader = {'Content-Type':'application/json'};
  return this.http.post<any>(this.addemployeeUrl, emp_value, {headers: empHeader});
}

addEmployee_address(formvalue : any): Observable<any>{
  return this.http.post<any[]>(this.addemployeeUrl, formvalue, {reportProgress: true});
}

deleteEmployee(id_emp: any,stat:any): Observable<any>{
  const param = {
    'em_id' : id_emp,
    'status' : stat
 };
 return this.http.get<any[]>(this.deleteemployeeUrl, {params: param});
}
updateEmp(formValue: any): Observable<any>{
  const edit_empHeader = {'Content-Type':'application/json'};
    return this.http.put<any>(this.updateemployeeUrl,formValue,{headers: edit_empHeader});
  }

  getCustomer(): Observable<any>{
    return this.http.get<any[]>(this.customerUrl);
  }
  getCustomer_not_use(): Observable<any>{
    return this.http.get<any[]>(this.customernotuseUrl);
  }
  getCustomerByCusId(cus_id:any): Observable<any[]>{
    const param = {
      'cus_id' : cus_id
   };
   return this.http.get<any[]>(this.customerUrl, {params: param});;
  }
  getCustomerdetailByCusId(cus_id:any): Observable<any[]>{
    const param = {
      'cus_id' : cus_id
   };
   return this.http.get<any[]>(this.customerdetailUrl, {params: param});;
  }
  getCustomerByKey(keyword: string): Observable<customer[]>{
    const param = {
       'keyword' : keyword
    };
    return this.http.get<customer[]>(this.customerUrl, {params: param});
   }
   getCustomernotuseByKey(keyword: string): Observable<customer[]>{
    const param = {
       'keyword' : keyword
    };
    return this.http.get<customer[]>(this.customernotuseUrl, {params: param});
   }

  addCustomer(cus_value: any): Observable<any>{
    const cusHeader = {'Content-Type':'application/json'};
    return this.http.post<any>(this.addcustomerUrl, cus_value, {headers: cusHeader});
  }
  deleteCustomer(id_cus: any,stat:any): Observable<any>{
    const param = {
      'cus_id' : id_cus,
      'status' : stat
   };
   return this.http.get<any[]>(this.deletecustomerUrl, {params: param});
  }
  updateCus(formValue: any): Observable<any>{
    const edit_cusHeader = {'Content-Type':'application/json'};
      return this.http.put<any>(this.updatecustomerUrl,formValue,{headers: edit_cusHeader});
    }


    AddPro_img(formvalue : any): Observable<any>{
    return this.http.post<any[]>(this.imgUrl, formvalue, {reportProgress: true});
  }
    getProduct(): Observable<any>{
      return this.http.get<any[]>(this.productUrl);
    }

    getProduct_not_use(): Observable<any>{
      return this.http.get<any[]>(this.productnotuseUrl);
    }

    getProductByProId(pro_id:any): Observable<any>{
      const param = {
        'pro_id' : pro_id
     };
     return this.http.get<any[]>(this.productUrl, {params: param});;
    }
    getProductByKey(keyword: string): Observable<product[]>{
      const param = {
         'keyword' : keyword
      };
      return this.http.get<product[]>(this.productUrl, {params: param});
     }

     getProductnotuseByKey(keyword: string): Observable<product[]>{
      const param = {
         'keyword' : keyword
      };
      return this.http.get<product[]>(this.productnotuseUrl, {params: param});
     }

    addProduct(pro_value: any): Observable<any>{
      const proHeader = {'Content-Type':'application/json'};
      return this.http.post<any>(this.addproductUrl, pro_value, {headers: proHeader});
    }
    deleteProduct(id_pro: any,path :any): Observable<any>{
      const param = {
        'pro_id' : id_pro,
        'status' :path
     };
     return this.http.get<any[]>(this.deleteproductUrl, {params: param});
    }
    updatePro(formValue: any): Observable<any>{
      const edit_proHeader = {'Content-Type':'application/json'};
        return this.http.put<any>(this.updateproductUrl,formValue,{headers: edit_proHeader});
      }

      getOrder(): Observable<any>{
        return this.http.get<any[]>(this.orderUrl);
      }


      getOrderselect(): Observable<any>{
        return this.http.get<any[]>(this. orderselectUrl);
      }

      getOrderselect_not_use(): Observable<any>{

        return this.http.get<any[]>(this. orderselectnotuseUrl)
      }

      getOrderselect_not_use_date(date_start:any,date_end:any): Observable<any>{
        const param = {
          'date_start' : date_start,
          'date_end' : date_end
       };
        return this.http.get<any[]>(this. orderselectnotuseUrl)
      }

      getOrderByOrderId(order_id:any): Observable<any>{
        const param = {
          'order_id' : order_id
       };
       return this.http.get<any[]>(this.orderUrl, {params: param});;
      }
      getOrdertotal(order_id:any,s:any): Observable<any>{
        const param = {
          's' : s,
          'order_id':order_id
       };
       return this.http.get<any[]>(this.orderUrl, {params: param});;
      }
      getOrderByKey(keyword: string): Observable<any>{
        const param = {
           'keyword' : keyword
        };
        return this.http.get<order[]>(this.orderUrl, {params: param});
       }
       getOrderByKey2(keyword:any,date_start:any,date_end:any): Observable<any>{
        const param = {
          'keyword':keyword,
          'date_start' : date_start,
          'date_end' : date_end
       };
        return this.http.get<any[]>(this.orderselectnotuseUrl, {params: param})
      }
       getBycusId(keyword: string): Observable<order[]>{
        const param = {
           'cus_id' : keyword
        };
        return this.http.get<order[]>(this.orderUrl, {params: param});
       }
       deleteOrder(id_order: any): Observable<any>{
        const param = {
          'order_id' : id_order
       };
       return this.http.get<any[]>(this.deleteorderUrl, {params: param});
      }

      updateOrdertracking(formValue: any): Observable<any>{
        const edit_trackHeader = {'Content-Type':'application/json'};
          return this.http.put<any>(this.updateordertrackingUrl,formValue,{headers: edit_trackHeader});
        }

      updateOrderStatus(id_order: any,stat:any): Observable<any>{
        const param = {
          'order_id' : id_order,
          'status' : stat
        };
         return this.http.get<any[]>(this.updateorderstatus, {params: param});
        }

      updateProduct_img(img:any): Observable<any>{

          return this.http.post<any[]>(this.updateproduct_imgurl, img, {reportProgress: true});
        }

        getBank(): Observable<any>{
          return this.http.get<any[]>(this.bankUrl);
        }

        getBank_not_use(): Observable<any>{
          return this.http.get<any[]>(this.banknotuseUrl);
        }

        getBankByBankId(bank_id:any): Observable<any[]>{
          const param = {
            'bank_id' : bank_id
         };
         return this.http.get<any[]>(this.bankUrl, {params: param});;
        }

        getBankByKey(keyword: string): Observable<bank[]>{
         const param = {
            'keyword' : keyword
         };
         return this.http.get<bank[]>(this.bankUrl, {params: param});
        }

        getBanknotuseByKey(keyword: string): Observable<bank[]>{
          const param = {
             'keyword' : keyword
          };
          return this.http.get<bank[]>(this.banknotuseUrl, {params: param});
         }
        addBank(bank_value: any): Observable<any>{
          const bankHeader = {'Content-Type':'application/json'};
          return this.http.post<any>(this.addbankUrl, bank_value, {headers: bankHeader});
        }
        updateBank(formValue: any): Observable<any>{
          const edit_bankHeader = {'Content-Type':'application/json'};
            return this.http.put<any>(this.updatebankUrl,formValue,{headers: edit_bankHeader});
          }
        deleteBank(id_bank: any,stat:any): Observable<any>{
          const param = {
              'bank_id' : id_bank,
              'status' : stat
           };
           return this.http.get<any[]>(this.deletebankUrl, {params: param});
          }

          set_date(date:any){
            var show_date = format(add(new Date(date),{years:543}),'dd MMMM yyyy HH.MM น.',{locale:th})
            return show_date
           }
}

