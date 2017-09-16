<?php
$to = 'mishaalnathani@outlook.com';  //Recipient's or Your E-mail
$subject = "Contact Form Query"; // Subject of your email

$message .= 'First Name: ' . $_REQUEST['fname'] . "<br>";
$message .= 'Last Name: ' . $_REQUEST['lname'] . "<br>";
$message .= 'Subject: ' . $_REQUEST['subject'] . "<br><br><br>";
$message .= $_REQUEST['message'];

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "From: " . $_REQUEST['email'] . "\r\n"; // Sender's E-mail
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

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