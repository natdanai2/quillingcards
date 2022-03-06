<?php
	$conn = new mysqli("localhost","root","","quilling_cards");
	if($conn->connect_error){
		die("Connection Failed!".$conn->connect_error);
	}
?>
