<?php
session_start(); // Permite continuar la sesión.
if (isset($_SESSION['login'])) {
    $_SESSION = array();
    session_destroy();
}
header("Location:cine_login.php");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./styles.css">

</head>
<body>
    
</body>
</html>
