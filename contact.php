<?php

$to = 'mishaal@planecrazystudios.com';  //Recipient's or Your E-mail
$subject = $_REQUEST['subject'] . ; // Subject of your email

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "From: " . $_REQUEST['email'] . "\r\n"; // Sender's E-mail
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$message .= 'First Name: ' . $_REQUEST['fname'] . "\r\n";
$message .= 'Last Name: ' . $_REQUEST['lname'] . "\r\n";
$message .= 'Subject: ' . $_REQUEST['subject'] . "\r\n";
$message .= $_REQUEST['message'];

if (@mail($to, $subject, $message, $headers))
{
	// Transfer the value 'sent' to ajax function for showing success message.
	echo 'sent';
}
else
{
	// Transfer the value 'failed' to ajax function for showing error message.
	echo 'failed';
}
?>