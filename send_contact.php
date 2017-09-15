//Check if the values requested were provided
if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["subject"]) && isset($_POST["message"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $header = "from: $name <$email>";
    $to = "mishaal@planecrazystudios.com";

    if (mail($to, $subject, $message, $header)) {
        header("Location: confirm.html");
    } else {
        echo("Error");
    }
} 
?>