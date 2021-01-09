<?php

$id = $_GET['butaca'];
$peli = $_GET['pelicula'];

function getConexion()
{
    $host = "localhost";
    $db = "bdcine";
    $user = "root";
    $pass = "root";
    $conexion = new PDO("mysql:host=$host;dbname=$db;", $user, $pass);
    return $conexion;
}

function compra($peli, $id)
{
    $conexion = getConexion();

    $sql1 = "SELECT butacas FROM peliculas WHERE titulo = '$peli'";
    $resultado = $conexion->prepare($sql1);
    //$resultado->execute();
    $ok = $resultado->execute();
    $sentencia = $resultado->fetch(PDO::FETCH_ASSOC);
    $a =  str_split($sentencia['butacas']);

    for ($x = 0; $x < count($a); $x++) {

        if ($x == $id) {
            $a[$x] = "0";
        }
    }
    $text = implode($a);
    $sql2 = "UPDATE peliculas SET butacas = '$text' WHERE titulo = '$peli'";

    $resultado2 = $conexion->prepare($sql2);
    $resultado2->execute();


    //echo "sdf";
}
compra($peli, $id);


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comprada realizada</title>
    <link rel="stylesheet" href="./styles.css">
</head>

<body>
    <h1>¡Enhonorabuena!</h1>
    <?php
    echo "<p>Has adquerido una entrada. Para descargarla haz click <a href=\"cine_pdf_entrada.php?asiento=".$id."&pelicula=".$peli."\">AQUI</a></p>";

    ?>

    <a href="./cine_pagina.php"><img src="../imagenes/botonSeguir.png" alt="Comprar"></a>
</body>

</html>