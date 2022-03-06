<?php
    error_reporting(0);
    session_start();
    require_once 'config/db.php';
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

                <?php
                    if (isset($_SESSION['user_login'])) {
                        $user_id = $_SESSION['user_login'];
                        $stmt = $conn->query("SELECT * FROM users WHERE id = $user_id");
                        $stmt->execute();
                        $row = $stmt->fetch(PDO::FETCH_ASSOC);
                            echo  "welcome ". $row['firstname'] . ' ' . $row['lastname']."   ";
                            echo '<a href="logout.php" class="btn btn-danger">Logout</a>';
                    } else if (isset($_SESSION['admin_login'])) {
                                $admin_id = $_SESSION['admin_login'];
                                $stmt = $conn->query("SELECT * FROM users WHERE id = $admin_id");
                                $stmt->execute();
                                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                                    echo  "welcome ". $row['firstname'] . ' ' . $row['lastname']."   ";
                                    echo '<a href="logout.php" class="btn btn-danger">Logout</a>';
                    } else {
                                    echo '<a class="navbar-sm-brand text-light text-decoration-none" href="http://localhost/Quellingcard/signin.php">สมัครสมาชิก | เข้าสู่ระบบ</a>';
                            }
                ?>

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
                            <a class="nav-link" style="color:#a97049" href="index.php">หน้าหลัก</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="shop.php">ร้านค้า</a>
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

                    <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                        <i class="fa fa-fw fa-search text-black mr-2"></i>
                    </a>

                    <a class="nav-item">
            <a class="nav-link" href="cart.php"><i class="fas fa-shopping-cart"></i> <span id="cart-item" class="badge badge-danger"></span></a>
          </a>


                </div>
            </div>

        </div>
    </nav>
    <!-- Close Header -->

    <!-- Modal -->
    <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="w-100 pt-1 mb-5 text-right">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="get" class="modal-content modal-body border-0 p-0">
                <div class="input-group mb-2">
                    <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ...">
                    <button type="submit" class="input-group-text bg-success text-light">
                        <i class="fa fa-fw fa-search text-white"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="container">
                    <div class="row p-5">
                        <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img class="img-fluid " src="/Quellingcard/image/chinese1.png">
                        </div>
                        <div class="col-lg-6 mb-0 d-flex align-items-center">
                            <div class="text-align-left align-self-center">
                                <h1 class="h1" style="color:#e8b7b7"><b>ใหม่!!</b>  สินค้าสุดพิเศษ</h1>
                                <h2 class="h2">ฉลองเนื่องในโอกาสขึ้นปีใหม่</h2>
                                <p>
                                    มอบการ์ดสุดพิเศษให้คนพิเศษสำหรับคุณ
                                    <!-- <a rel="sponsored" style="color:#e8b7b7" href="https://templatemo.com" target="_blank">TemplateMo</a> website.
                                    <a rel="sponsored" style="color:#e8b7b7" href="https://stories.freepik.com/" target="_blank">Freepik Stories</a>,
                                    <a rel="sponsored" style="color:#e8b7b7" href="https://unsplash.com/" target="_blank">Unsplash</a> and
                                    <a rel="sponsored" style="color:#e8b7b7" href="https://icons8.com/" target="_blank">Icons 8</a>. -->
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container">
                    <div class="row p-5">
                        <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img class="img-fluid" src="/Quellingcard/image/christmas.png">
                        </div>
                        <div class="col-lg-6 mb-0 d-flex align-items-center">
                            <div class="text-align-left">
                                <h1 class="h1">การ์ดอวยพรใน <br>วันคริสต์มาส </br></h1>
                                <h2 class="h2">#Christmas Eve. #Snowy season.</h2>
                                <p>
                                    มอบการ์ดอวยพรให้เเก่กันในช่วงวันคริสต์มาส
                                    <br>You are <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.</br>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container">
                    <div class="row p-5">
                        <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img class="img-fluid" src="/Quellingcard/image/father.png">
                        </div>
                        <div class="col-lg-6 mb-0 d-flex align-items-center">
                            <div class="text-align-left">
                                <h1 class="h1">สุขสันต์ วันพ่อ</h1>
                                <h2 class="h2">5 ธันวาคม เป็น วันพ่อของทุกปี</h2>
                                <p>
                                    วันพ่อปีนี้ คุณได้ให้ของขวัญกับคนสำคัญรึยัง
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
            <i class="fas fa-chevron-left"></i>
        </a>
        <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
            <i class="fas fa-chevron-right"></i>
        </a>
    </div>
    <!-- End Banner Hero -->


    <!-- Start Categories of The Month -->
    <section class="container py-5">
        <div class="row text-center pt-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">เทศกาลในเดือน กุมภาพันธ์</h1>
                <p>

                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="shop.php"><img src="/Quellingcard/image/val.jpg" class="rounded-circle img-fluid border"></a>
                <h5 class="text-center mt-3 mb-3">วันวาเลนไทน์</h5>
                <p class="text-center" ><a class="btn btn-success" href="shop.php">Go Shop</a></p>
            </div>
            <!--<div class="col-12 col-md-4 p-5 mt-3">
                <a href="shop.php"><img src="./assets/img/category_img_02.jpg" class="rounded-circle img-fluid border"></a>
                <h2 class="h5 text-center mt-3 mb-3">คริสต์มาสอีฟ</h2>
                <p class="text-center"><a class="btn btn-success" href="shop.php" >ซื้อเลย</a></p>
            </div>-->
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="shop.php"><img src="/Quellingcard/image/hnyc.jpg" class="rounded-circle img-fluid border"></a>
                <h2 class="h5 text-center mt-3 mb-3">วันตรุษจีน</h2>
                <p class="text-center"><a class="btn btn-success" href="shop.php">Go Shop</a></p>
            </div>
        </div>
    </section>
    <!-- End Categories of The Month -->


    <!-- Start Featured Product -->
    <section class="bg-light">
        <div class="container py-5">
            <div class="row text-center py-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">สินค้าเเนะนำ</h1>
                    <p>
                        เรามามอบการ์ดเเทนความรู้สึกให้กับคนที่คุณรัก หรือ คนที่คุณอยากจะขอบคุณ ในเดือนกุมภาพันธ์เดือนเเห่งความรัก
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                    <a href="shop.php"><img src="/Quellingcard/image/valen.jpg" class="card-img-top">
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                </li>
                                <li class="text-muted text-right">350.00 บาท</li>
                            </ul>
                            <a href="shops.php" class="h2 text-decoration-none text-light">การ์ด วันวาเลนไทน์</a>
                            <p class="card-text">
                                การ์ดอวยพร ขนาด A5 สามารถตกเเต่งการ์ดได้เองอีกด้วย พร้อมซองจดหมายพร้อมส่ง
                            </p>
                            <p class="text-muted">Reviews (14)</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                        <a href="shop.php">
                            <img src="/Quellingcard/image/frame.png" class="card-img-top" alt="...">
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                </li>
                                <li class="text-muted text-right">480.00 บาท</li>
                            </ul>
                            <a href="shop" class="h2 text-decoration-none text-light">กรอบรูปภาพ</a>
                            <p class="card-text">
                               กรอบรูปภาพที่เป็น 3 มิติ ทำให้ดูโดดเด่นขึ้น เป็นการยกระดับกรอบรูปภาพเเบบเดิม ในขนาด A4
                            </p>
                            <p class="text-muted">Reviews (8)</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                        <a href="shop.php">
                            <img src="/Quellingcard/image/flower.jpg" class="card-img-top" alt="...">
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                </li>
                                <li class="text-muted text-right">260.00 บาท</li>
                            </ul>
                            <a href="shop-single.php" class="h2 text-decoration-none text-light">ดอกไม้ห้อย</a>
                            <p class="card-text">
                                ตกเเต่งห้องของคุณให้เหมือน อยู่ท่ามกลางหิมะ เเถมยังช่วยตกเเต่งห้องให้น่าอยู่ยิ่งขึ้นไปอีก
                            </p>
                            <p class="text-muted">Reviews (15)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Featured Product -->


    <!-- Start Footer -->
    <footer class="bg-light" id="tempaltemo_footer">
        <div class="container">
            <div class="row">

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light logo">Quelling Card Shop</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li>
                            <i class="fas fa-map-marker-alt fa-fw"></i>
                            66/448 คลองขวาง ภาษีเจริญ กรุงเทพ 10160
                        </li>
                        <li>
                            <i class="fa fa-phone fa-fw"></i>
                            เบอร์โทร: 092-261-6441
                        </li>
                        <li>
                            <i class="fa fa-envelope fa-fw"></i>
                            <a class="text-light" href="mailto:info@company.com">siwapoom@hotmail.com</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">ของขวัญสุดพิเศษ</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><a class="text-light" href="#">Graduation</a></li>
                        <li><a class="text-light" href="#">Valentine</a></li>
                        <li><a class="text-light" href="#">Happy Chinese New Year</a></li>
                        <li><a class="text-light" href="#">Happy Easter</a></li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">ข้อมูลเพิ่มเติม</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><a class="text-light" href="#">หน้าหลัก</a></li>
                        <li><a class="text-light" href="#">ร้านค้า</a></li>
                        <li><a class="text-light" href="#">เเจ้งชำระเงิน</a></li>
                        <li><a class="text-light" href="#">เกี่ยวกับเรา</a></li>
                        <!-- <li><a class="text-light" href="#">ติดต่อเราได้</a></li> -->
                    </ul>
                </div>

            </div>

            <div class="row text-light mb-4">
                <div class="col-12 mb-3">
                    <div class="w-100 my-3 border-top border-light"></div>
                </div>
                <div class="col-auto me-auto">
                    <ul class="list-inline text-left footer-icons">
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-auto">
                    <label class="sr-only" for="subscribeEmail">Email address</label>
                    <div class="input-group mb-2">
                        <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address">
                        <div class="input-group-text btn-success text-light">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-100 bg-dark py-3">
            <div class="container">
                <div class="row pt-2">
                    <div class="col-12">
                    </div>
                </div>
            </div>
        </div>

    </footer>
    <!-- End Footer -->

    <!-- Start Script -->
    <script src="assets/js/jquery-1.11.0.min.js"></script>
    <script src="assets/js/jquery-migrate-1.2.1.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/templatemo.js"></script>
    <script src="assets/js/custom.js"></script>
    <!-- End Script -->

  <script type="text/javascript">
  $(document).ready(function() {

    // Change the item quantity
    $(".itemQty").on('change', function() {
      var $el = $(this).closest('tr');

      var pid = $el.find(".pid").val();
      var pprice = $el.find(".pprice").val();
      var qty = $el.find(".itemQty").val();
      location.reload(true);
      $.ajax({
        url: 'action.php',
        method: 'post',
        cache: false,
        data: {
          qty: qty,
          pid: pid,
          pprice: pprice
        },
        success: function(response) {
          console.log(response);
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
