<?php

//Inicio la session
session_start();



//Si no estas logeado pues te lleva a la pagina login
if (!isset($_SESSION['login'])) {
    header("Location:login.php");
}



//comproacion si hau¡y un cookie yaa creada
if (isset($_COOKIE['hora_ultimo_logueo'])) {
    //Si yaa hay una cookie creada pues coge el valor que tiene
    $ultimo_login = $_COOKIE['hora_ultimo_logueo'];
}


//por defecto me coga el tiempo de Madrid. Sino sale una hora anterior
date_default_timezone_set("Europe/Madrid");


//Si no esta pues me lo crea
setcookie("hora_ultimo_logueo", time(), time() + 60 * 60 * 24 * 365);




//Hacer la conexion a BBDD
function getConexion()
{
    $host = "localhost";
    $db = "bdusuarios";
    $user = "root";
    $pass = "";
    $conexion = new PDO("mysql:host=$host;dbname=$db;", $user, $pass);
    return $conexion;
}




$conexion = getConexion();

//Coger el nombre de usuario de BBDD
$user_name = $_SESSION['login'];



//La consulta de permisos
$sql = "SELECT lectura, escritura, administracion FROM usuarios WHERE login = :login";

$resultado = $conexion->prepare($sql);
$resultado->bindParam(":login", $user_name);
//$resultado->execute();
$resultado->execute();

//El select de permisos se pasan a la una array asociativa
$sentencia = $resultado->fetch(PDO::FETCH_ASSOC);
//Coger los permisos en una variable
$lectura = $sentencia['lectura'];
$escritura = $sentencia['escritura'];
$administracion = $sentencia['administracion'];




//echo $lectura.$escritura.$administracion;

function cookie($ultimo_login)
{
    if (isset($ultimo_login)) {
        echo "Tu ultima conexion fue de: " . date("d/m/y \a \l\a\s H:i", $ultimo_login);
    } else {
        echo "Bienvenido por la primera vez.";
    }
    return "fd";
}



//Function para que dependiendo de los permisos pues que me muestre el texto de Bienvenido
function permisos($lectura, $escritura, $administracion, $ultimo_login)
{
    $patata = "";
    if ($lectura == 1) {
        $patata .= " (leer)";
    }
    if ($escritura == 1) {
        $patata .= " (añadir)";
    }
    if ($administracion == 1) {
        $patata .= " (eliminar)";
    }
    return "!Bienvenido " . $_SESSION['login'] . "!. En esta pagina puedes " . $patata . " libros [<a href=\"logout.php\">Logout</a>]<br>";
}
//Ejecutar la function para el texto de Bienvenido
echo permisos($lectura, $escritura, $administracion, $ultimo_login);
cookie($ultimo_login);




//Function que imprime la tabla por defecto no dibuja la columna eliminar pero, si administracion es == 1 pues si que lo dibuja
function tabla($administracion, $conexion)
{


    $sql = "SELECT * FROM libros";
    $resultado = $conexion->prepare($sql);
    $resultado->execute();
    while ($fila = $resultado->fetch()) {
        // guardamos las filas en un array
        $rows = "";
        $rows = $rows . "<tr><td>" . $fila['id'] . "</td> <td>" . $fila['titulo'] . "</td> <td>" . $fila['autor'] . "</td> 
         <td>" . $fila['paginas'] . "</td>";

        //Para dibujar la columna eliminar si se cumple la condicion. Y para eliminar un campo pues por get paso la id y desde la pagina eliminar.php te los elimina
        if ($administracion == 1) {

            $rows = $rows . "<td> <a href = \"./eliminar.php?id=" . $fila['id'] . "\">Eliminar</a></td></tr>";
        }
        echo $rows;
    }
}




//Insertar los libros
function insertarProduct($id, $titulo, $autor, $paginas)
{

    $conexion = getConexion();

    $sql = "INSERT INTO libros (id, titulo, autor, paginas) 
                VALUES (:id, :titulo, :autor, :paginas)";

    $resultado = $conexion->prepare($sql);
    $resultado->bindParam(':id', $id);
    $resultado->bindParam(':titulo', $titulo);
    $resultado->bindParam(':autor', $autor);
    $resultado->bindParam(':paginas', $paginas);



    if (!$resultado) {
        $mensaje = "Error al crear el registro";
        echo $mensaje;
    } else {
        $resultado->execute();

       
    }
    return $mensaje;
}




//Comprobacion si todos los input tiene algun valor pues ejecuta la funcion de insertar
if (!empty($_POST['id']) && !empty($_POST['titulo']) && !empty($_POST['autor']) && !empty($_POST['paginas'])) {

    //header('Location: ./ud04ejer04.php');
    echo insertarProduct($_POST['id'], $_POST['titulo'], $_POST['autor'], $_POST['paginas']);
}



//Function para comprobar si solamente tienes el permiso de lectura pues los input estaran desabilitados para el usuario.
function disabled($lectura, $escritura)
{

    if ($lectura == 1 && $escritura == 0) {
        echo "disabled";
    } else {
        echo "";
    }
}



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina</title>
</head>

<body>
    <h1>Tabla libros</h1>



    <form action=" " method="post">

        <label for="id">Id: </label>
        <input type="text" name="id" id="id" value="<?php if (isset($_POST['id'])) echo $_POST['id']; ?>" <?php disabled($lectura, $escritura) ?>>

        <?php
        if (isset($_POST['enviar']) && empty($_POST['id']))
            echo "<span style='color:red'>&#8592; ¡Debes introducir un Id!!</span>";
        ?>

        <br><br>


        <label for="titulo">Titulo: </label>
        <input type="text" name="titulo" id="titulo" value="<?php if (isset($_POST['titulo'])) echo $_POST['titulo']; ?>" <?php disabled($lectura, $escritura) ?>>

        <?php
        if (isset($_POST['enviar']) && empty($_POST['titulo']))
            echo "<span style='color:red'>&#8592; ¡Debes introducir un Titulo!!</span>";
        ?>

        <br><br>


        <label for="autor">Autor: </label>
        <input type="text" name="autor" id="autor" value="<?php if (isset($_POST['autor'])) echo $_POST['autor']; ?>" <?php disabled($lectura, $escritura) ?>>

        <?php
        if (isset($_POST['enviar']) && empty($_POST['autor']))
            echo "<span style='color:red'>&#8592; ¡Debes introducir un Autor!!</span>";
        ?>

        <br><br>


        <label for="paginas">Paginas: </label>
        <input type="text" name="paginas" id="paginas" value="<?php if (isset($_POST['paginas'])) echo $_POST['paginas']; ?>" <?php disabled($lectura, $escritura) ?>>

        <?php
        if (isset($_POST['enviar']) && empty($_POST['paginas']))
            echo "<span style='color:red'>&#8592; ¡Debes introducir un Paginas!!</span>";
        ?>

        <br><br>


        <button type="submit" name="enviar" <?php disabled($lectura, $escritura) ?>>Introducir libro</button>


    </form>

    <br><br><br>


    <table border>

        <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>AUTHOR</th>
            <th>PAGINAS</th>
            <?php

            //En el caso si el usuario tiene permiso de administracion pues tambien te crea la columna eliminar
            if ($administracion == 1) {
                echo "<th>Elimiar</th>";
            }

            ?>


        </tr>
        <?php
        //Ejecutacion de la funcion tabla
        tabla($administracion, $conexion);
        ?>


    </table>
</body>

</html>