<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];

$mailheader = "From:".$name."<".$email.">\r\n";


$recipient = "tventura94@gmail.com";

mail($recipient, $subject, $message, $mailheader)

or die("Error!");

echo"message send";

?>