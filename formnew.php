<?php

	$name=$_REQUEST['fname'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];
    
    if (($name=="")||($email=="")||($message==""))
        {
		
		echo "All fields are required, please fill <a href=\"\">the form</a> again.";
	    
	    }
    
    else{		
	    
	    $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Message sent using your contact form";
		mail("mishaalnathani@outlook.com", $subject, $message, $from);
		echo "Email sent!";
	    }
    }  
?>
						