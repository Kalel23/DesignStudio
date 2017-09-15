$email= $_POST['email']; 

<?php

$to = 'mishaal@planecrazystudios.com';  //Recipient's or Your E-mail
$subject = $_POST ['subject'] . ; // Subject of your email

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "From: " . $_REQUEST['email'] . "\r\n"; // Sender's E-mail
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$message .= 'First Name: ' . $_POST['fname'] . "\r\n";
$message .= 'Last Name: ' . $_POST['lname'] . "\r\n";
$message .= 'Subject: ' . $_POST['subject'] . "\r\n";
$message .= $_POST ['message'];

$send_contact=mail($to,$subject,$message,$header);

// Check, if message sent to your email 
// display message "We've recived your information"
if($send_contact){
    header('Location: confirm.html'); 
}    
else {
echo "ERROR";
}
?>