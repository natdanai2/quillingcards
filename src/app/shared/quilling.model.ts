export interface employee {
  em_id:    string;
  name:     string;
  phone:     string;
  address:   string;
  birthdate: string;
  permission: string;
  Employee_name: string;

}

export interface customer {
  cus_id:    string;
  name:     string;
  phone:     string;
  address:   string;
  email_address: string;
  birthdate: string;

}

export interface product {
  pro_id:    string;
  name:     string;
  quantity:     string;
  price:   string;
  product_pic: string;


}

export interface order {
  order_id:    string;
  Product_name:     string;
  Customer_name:     string;
  quantity:   string;
  total: string;
  status: string;
  date: string;
  time: string;
  picture_payment: string;

}


