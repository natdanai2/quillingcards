<?php
 
session_start();
require_once 'config/db.php';
if (!isset($_SESSION['user_login'])) {
  $_SESSION['error'] = 'กรุณาเข้าสู่ระบบ!';
  header('location: signin.php');
}
?>


<?php
require 'config.php';
$grand_total = 0;
$allItems = '';
$items = [];

$sql = "SELECT CONCAT(product_code,product_name,' (',qty,')'  )  AS ItemQty, total_price FROM cart  ";
$stmt = $conn->prepare($sql);
$stmt->execute();
$result = $stmt->get_result();
while ($row = $result->fetch_assoc()) {
  $grand_total += $row['total_price'];
  $items[] = $row['ItemQty'];
}
$allItems = implode(   '  ,  '  ,$items);
$cutstr = substr($allItems,0,2);

$sql = "SELECT id As cid FROM cart";
$result = mysqli_query($conn, $sql);
while($row = mysqli_fetch_assoc($result)) {
  $cids[] = $row["cid"];
  $cartid = implode(   '  ,  '  ,$cids);
  $cutst = substr($cartid,0,2);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <title>QuellingCardShop</title>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="apple-touch-icon" href="assets/img/apple-icon.png">
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/icon.png">

  <link rel="stylesheet" href="assets/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/templatemo.css">
  <link rel="stylesheet" href="assets/css/custom.css">
  <link rel="stylesheet" href="assets/css/testtemplate.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap">
  <link rel="stylesheet" href="assets/css/fontawesome.min.css">

  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js'></script>

</head>

<body>

  <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
    <div class="container text-light">
      <div class="w-100 d-flex justify-content-between">
        <div>
          <i class="fa fa-envelope mx-2"></i>
          <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">siwapoom@hotmail.com</a>
          <i class="fa fa-phone mx-2"></i>
          <a class="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">092-261-6441</a>
        </div>
        <div>
          <a class="text-light" href="https://facebook.com/" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
          <a class="text-light" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
          <a class="text-light" href="https://twitter.com/" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>

        </div>
      </div>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg navbar-light shadow">
    <div class="container d-flex justify-content-between align-items-center">

      <a class="i" href="index.php"><img src="assets/img/Logo.png" style="width:150;height:90px;"></a>

      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
        <div class="flex-fill">
          <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.php">หน้าหลัก</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style="color:#a97049" href="shop.php">ร้านค้า</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="payment.php">เเจ้งชำระเงิน</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.php">เกี่ยวกับเรา</a>
            </li>
            <!-- <li class="nav-item">
                            <a class="nav-link" href="contact.php">ติดต่อเราได้</a>
                        </li> -->
          </ul>
        </div>
        <div class="navbar align-self-center d-flex">
          <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
            <div class="input-group">
              <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ...">
              <div class="input-group-text">
                <i class="fa fa-fw fa-search"></i>
              </div>
            </div>
          </div>

          <!-- <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
            <i class="fa fa-fw fa-search text-black mr-2"></i>
          </a> -->

          <a class="nav-item">
            <a class="nav-link" href="cart.php"><i class="fas fa-shopping-cart"></i> <span id="cart-item" class="badge badge-danger"></span></a>
          </a>


        </div>
      </div>

    </div>
  </nav>
  
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6 px-4 pb-4" id="order"><br />
        <h4 class="text-center text-info p-2">ยืนยันการสั่งซื้อ</h4>
        <div class="jumbotron p-3 mb-2 text-center">
          <h6 class="lead"><b>หมายเลขการสั่งซื้อ : </b><?= $cutst; ?></h6>
          <h5 class="lead"><b>สินค้า : </b><?= $allItems; ?></h5>
          <h class="lead"><b>ค่าจัดส่ง : </b>ฟรี</h5>
          <h5><b>ยอดรวมทั้งหมด : </b><?= number_format($grand_total, 2) ?> บาท</h5>
        </div>
        <form action="" method="post" id="placeOrder">
          <input type="hidden" name="order_id" value="<?= $cutst; ?>"> 
          <input type="hidden" name="cus_id" value="<?= $_SESSION['user_login']; ?>">
          <input type="hidden" name="products" value="<?= $allItems; ?>">
          <input type="hidden" name="grand_total" value="<?= $grand_total; ?>">
          <div class="form-group">
            <input type="text" name="name" class="form-control" placeholder="ชื่อ-นามสกุล" required>
          </div>
          <div class="form-group">
            <input type="email" name="email" class="form-control" placeholder="กรอก E-Mail" required>
          </div>
          <div class="form-group">
            <input type="tel" name="phone" class="form-control" placeholder="เบอร์โทรศัพท์" required>
          </div>
          <div class="form-group">
            <textarea name="address" class="form-control" rows="3" cols="10" placeholder="กรอกที่อยู่ ตรงนี้...."required></textarea>
          </div>
          <h6 class="text-center lead">เลือกการชำระเงิน</h6>
          <div class="form-group">
            <select name="pmode" class="form-control" required>
              <option value="" selected disabled>-เลือกการชำระเงิน-</option>
              <option value="เก็บเงินปลายทาง">เก็บเงินปลายทาง</option>
              <option value="เดบิต/เครดิต">เดบิต/เครดิต</option>
            </select>
          </div>
          <div class="form-group">
            <input type="submit" name="submit" value="Place Order" class="btn btn-danger btn-block">
          </div>
        </form>
      </div>
    </div>
  </div>

  <script type="text/javascript">
    $(document).ready(function() {

      // Sending Form data to the server
      $("#placeOrder").submit(function(e) {
        e.preventDefault();
        $.ajax({
          url: 'action.php',
          method: 'post',
          data: $('form').serialize() + "&action=order",
          success: function(response) {
            $("#order").html(response);
          }
        });
      });

      // Load total no.of items added in the cart and display in the navbar
      load_cart_item_number();

      function load_cart_item_number() {
        $.ajax({
          url: 'action.php',
          method: 'get',
          data: {
            cartItem: "cart_item"
          },
          success: function(response) {
            $("#cart-item").html(response);
          }
        });
      }
    });
  </script>
</body>

</html>