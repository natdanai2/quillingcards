<?php
    $servername="localhost";
    $username = "root";
    $password="";

    try{
        $conn = new PDO("mysql:host=$servername;dbname=quilling_cards", $username,$password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo ""; //Connected Successfully
    } Catch(PDOException $e){
        echo "Connected Failed: " . $e->getMessage();
    }

?>
