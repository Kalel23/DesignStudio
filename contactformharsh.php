<?php
$to = 'mishaalnathani@outlook.com';  //Recipient's or Your E-mail
$subject = "Contact Form Query"; // Subject of your email

$message .= 'First Name: ' . $_POST['fname'] . "<br>";
$message .= 'Last Name: ' . $_POST['lname'] . "<br>";
$message .= 'Subject: ' . $_POST['subject'] . "<br><br><br>";
$message .= $_POST['message'];

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "From: " . $_POST['email'] . "\r\n"; // Sender's E-mail
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// just try mailing it without the if else block, see if you receive the email
echo "Sending email...."
mail($to, $subject, $message, $headers);

?>