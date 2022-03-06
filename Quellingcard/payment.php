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
    <link href="style.css" rel="stylesheet" type="text/css">
    
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js'></script>
    <script src="jquery-3.3.1.min.js"></script>
    <script type="text/javascript">

        $(document).ready(function(){

            $("#but_upload").click(function(){

                var fd = new FormData();

                var files = $('#file')[0].files;

                // Check file selected or not
                if(files.length > 0 ){

                    fd.append('file',files[0]);

                    $.ajax({
                        url:'upload.php',
                        type:'post',
                        data:fd,
                        contentType: false,
                        processData: false,
                        success:function(response){
                            if(response != 0){
                                $("#img").attr("src",response);
                                $('.preview img').show();
                            }else{
                                alert('File not uploaded');
                            }
                        }
                    });
                }else{
                    alert("กรุณาใส่หลักฐานการโอนเงิน ขอบคุณครับ");
                }
            });
        });


    </script>
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
                            <a class="nav-link"  href="index.php">หน้าหลัก</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="shop.php">ร้านค้า</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style="color:#a97049" href="payment.php">เเจ้งชำระเงิน</a>
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
    <!-- Close Header -->

<br>
<div class="container">
  <h1 style="text-align: center; color:#FF9999" class="head">
    แจ้งชำระเงิน                                                                                                            
  </h1>

  <div  id="left">
  <p><img src="/Quellingcard/image/image1.jpg" style="width:320px;height:500px;margin-left:15px;"></p>
</div>

  <div class="right">
    <div class="col-4 " style="text-align: center;">
      <img [src]="logo2" />
    </div>

    <div class="col ">
      <div style="text-align: right;">

        <form action="" method="post" id="placeOrder">
            <input type="hidden" name="cus_id" value="<?= $_SESSION['user_login']; ?>"> 
          <div class="form-group row">
            <label for="inputname" class="col-sm-2 col-form-label">ชื่อ-นามสกุล</label>
            <div class="col-sm-10"> <input type="text" class="form-control" id="inputname" name="formname" require
                placeholder="โปรดใส่ชื่อ-นามสกุลของคุณ"> </div>
          </div>          
          
            <div class="form-group row">
            <label for="inputphone" class="col-sm-2 col-form-label">เบอร์โทรศัพท์</label>
            <div class="col-sm-10"> <input type="text" class="form-control" id="inputphone" name="formtel" require
                placeholder="โปรดใส่เบอร์โทรศัพท์ของคุณ"> </div>
          </div>

          <div class="form-group row">
            <label for="inputorder" class="col-sm-2 col-form-label">หมายเลขการสั่งซื้อ</label>
            <div class="col-sm-10"><input type="text"  class="form-control" id="inputorder"name="formnum"  require placeholder="โปรดใส่หมายเลขการสั่งซื้อ">
          </div>
        <div>

          <div class="form-group row">
            <label for="inputdate" class="col-sm-2 col-form-label">วัน/เดือน/ปีที่โอน</label>
            <div class="col-sm-10"> <input type="date" class="form-control" id="inputdate" name="formdate" require placeholder="">
            </div>
          </div>

          <div class="form-group row">
            <label for="inputtime" class="col-sm-2 col-form-label">เวลาการโอน</label>
            <div class="col-sm-10"> <input type="time" class="form-control" id="inputtime" name="formtime"  require placeholder="time"> </div>
          </div> 

          <div class="form-group row">
            <label for="inputtotal" class="col-sm-2 col-form-label">จำนวนเงิน</label>
            <div class="col-sm-10"> <input type="number" class="form-control" id="inputtotal" name="formprice"  required placeholder="โปรดใส่จำนวนเงินของคุณ"> </div>
          </div> 

            <div class="form-group row">
              <label for="inputfile" class="col-sm-2 col-form-label">หลักฐานการโอนเงิน</label>
              <div class="col-sm-10"><input type="file" class="form-control" id="file" name="file"> </div>
              <!-- <input type="button" name="submit" class="button" value="Upload" id="but_upload"> -->
            </div>

            <!-- <div class='preview'>
                <img src="upload/default.png" id="img" width="100" height="100">
            </div> -->

          <div class="form-group">
            <input type="submit" name="submit" value="เเจ้งการชำระเงิน" id="but_upload" class="btn btn-danger btn-block">
          </div>  

        </form>
    </div>

      </div>
    </div>

  <div style="text-align: center;">
    <p><img src="/Quellingcard/image/banner.jpg" style="width:763px;height:157px;margin-left:15px;"></p>
  </div>
</div>

<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "quilling_cards";

    $cus_id = $_POST['cus_id'];
    $formname = $_POST['formname'];
    $formtel = $_POST['formtel'];
    $formnum = $_POST['formnum'];
    $formdate = $_POST['formdate'];
    $formtime = $_POST['formtime'];
    $formprice = $_POST['formprice'];
    $file = $_POST['file'];

    

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if (isset($_POST["submit"])) {
        $sql = "INSERT INTO payment ( name, telephone, order_id, date, time, totalprice, image)  VALUES('" . $formname . "','" . $formtel . "','" . $formnum . "','" . $formdate . "','" . $formtime . "','" . $formprice . "','" . $file . "')";

        if ($conn->query($sql) === TRUE) {
            echo '<script>alert("ระบบได้ทำการเเจ้งชำระเงินไปให้ทางร้านเเล้ว")</script>';
        } else {
            // echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    $conn->close();

    ?>

 
    
  </body>

  </html>