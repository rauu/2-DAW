<?php

session_start();

function getConexion()
{
    $host = "localhost";
    $db = "bdusuarios";
    $user = "root";
    $pass = "";
    $conexion = new PDO("mysql:host=$host;dbname=$db;", $user, $pass);
    return $conexion;
}

if (isset($_POST["enviar"])) {

    if (!empty($_POST['usuario']) && !empty($_POST['contrasenya'])) {
        $usuario = $_POST['usuario'];
        $contrasenya = sha1($_POST['contrasenya']);

        $conexion = getConexion();

        $sql = "SELECT * FROM usuarios WHERE login = :login AND password = :password";

        $resultado = $conexion->prepare($sql);
        $resultado->bindParam(":login", $usuario);
        $resultado->bindParam(":password", $contrasenya);

        $resultado->execute();

        $sentencia = $resultado->fetch(PDO::FETCH_ASSOC);
        //echo "asdfgh";
        //var_dump($sentencia);
        if ($sentencia != null) {

            //$_SESSION['nombre'] = $resultado['nombre'];
            $_SESSION['login'] = $sentencia['login'];
            header("Location:pagina.php");
        } else {
            $GLOBALS['error_message'] = "<span style='color:red'>Datos incorrectos. Pruebe de nuevo</span>";
        }
    }
}
function mensaje()
{
    if (isset($GLOBALS['error_message'])) {
        echo $GLOBALS['error_message'];
    } else {
        echo "<span style='color:blue'>Introduce tus credenciales para entrar</span>";
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <h1>LOGIN</h1>


    <?php mensaje(); ?>

    <form method="post" action="">

        <label for="id">Usuario: </label>
        <input type="text" name="usuario" id="usuario" value="<?php if (isset($_POST['usuario'])) echo $_POST['usuario']; ?>">

        <?php
        if (isset($_POST['enviar']) && empty($_POST['usuario']))
            echo "<span style='color:red'>&#8592; ¡Debes introducir un Usuario!!</span>";
        $mensaje = "<span style='color:red'> Datos incorrectos. Prueba de nuevo</span>";
        ?>

        <br><br>


        <label for="titulo">Contraseña: </label>
        <input type="password" name="contrasenya" id="contrasenya" value="<?php if (isset($_POST['contrasenya'])) echo $_POST['contrasenya']; ?>">

        <?php
        if (isset($_POST['enviar']) && empty($_POST['contrasenya']))
            echo "<span style='color:red'>&#8592; ¡Debes introducir una Contraseña!!</span>";
        $mensaje = "<span style='color:red'> Datos incorrectos. Prueba de nuevo</span>";
        ?>
        <br>
        <br>

        <button type="submit" name="enviar">Entrar</button>

    </form>
    <br>
    <br>
    <?php

    echo "¿Aún no te has registrado? !<a href=\"registro.php\">Registrate</a>!";

    ?>



</body>

</html>