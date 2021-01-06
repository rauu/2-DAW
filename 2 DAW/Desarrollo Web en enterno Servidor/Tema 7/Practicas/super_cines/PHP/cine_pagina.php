<?php

//Inicio la session
session_start();






//Si no estas logeado pues te lleva a la pagina login
if (!isset($_SESSION['usuario'])) {
    header("Location:cine_login.php");
}



//Coger el nombre de usuario de BBDD
$user_name = $_SESSION['usuario'];


echo "!Bienvenido " . $user_name . "!. [<a href=\"cine_logout.php\">Logout</a>]<br>";



//Conexion a BBDD
function getConexion()
{
    $host = "localhost";
    $db = "bdcine";
    $user = "root";
    $pass = "root";
    $conexion = new PDO("mysql:host=$host;dbname=$db;", $user, $pass);
    return $conexion;
}


function butacas($peli)
{
    $conexion = getConexion();
    if (isset($_GET['peliculas'])) {



        $sql = "SELECT butacas FROM peliculas WHERE titulo = '$peli'";

        $resultado = $conexion->prepare($sql);
        $resultado->execute();

        $sentencia = $resultado->fetch(PDO::FETCH_ASSOC);
        $a =  str_split($sentencia['butacas']);

        echo "<br>";
        echo "<br>";

        for ($x = 0; $x < count($a); $x++) {
            if ($x % 10  == 0) {
                echo "<br>";
            } else {
                if (!empty($_GET['peliculas'])) {
                    if ($a[$x] == 1) {
                        echo " <a href=\"cine_comprada.php?butaca=$x&pelicula=$peli\"  name=\"" . $x . "\"><img src=\"../imagenes/butaca_amarilla.png\" alt=\"title\"></a>";
                    } else {
                        echo "<img src=\"../imagenes/butaca_roja.png\" alt=\"title\">";
                    }
                }
            }
        }
    }
    //echo "sdf";
}

$conexion = getConexion();

$sql = "SELECT titulo FROM peliculas";
$resultado = $conexion->prepare($sql);

$resultado->execute();

//$sentencia = $resultado->fetch(PDO::FETCH_ASSOC);

function nombre_peli()
{



    if (isset($_GET['enviar'])) {
        if (!empty($_GET['peliculas'])) {
            echo $_GET['peliculas'];
        } else {
            die("ha habido un problema");
        }
    }
}





//echo $_SESSION['peliculas'];


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

    <h1>Comprar entradas</h1>
    <h2>Pelicula: <?php nombre_peli(); ?></h2>


    <img src="../imagenes/pant.png" alt="">
    <?php

    if (isset($_GET['enviar'])) {
        $_SESSION['peliculas'] = $_GET['peliculas'];
        $peli = $_GET['peliculas'];
        butacas($peli);
    }


    ?>
    <br><br>
    <form action=" " action="GET">
        <select name="peliculas" id="peliculas">
            <option value="">Seleccionar pelicula</option>
            <?php
            $selected = "";
            while ($fila = $resultado->fetch()) {
                if ($_GET['peliculas'] == $fila['titulo']) {
                    $selected = "selected";
                }else{
                    $selected = "";
                }
                echo "<option " . $selected . " value=\"" . $fila['titulo'] . "\">" . $fila['titulo'] . "</option>";
            }

            ?>
        </select>
        <button type="submit" name="enviar">Seleccionar pelicula</button>
    </form>
</body>

</html>