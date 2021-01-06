<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrame</title>
    <link rel="stylesheet" href="./styles.css">

</head>

<body>
    <img src="../imagenes/logo.png" alt="super_cine">


    <form action=" " method="post">

        <label for="id">Usuario: </label>
        <input type="text" name="usuario" id="usuario"
            value="<?php if (isset($_POST['usuario'])) echo $_POST['usuario']; ?>">

        <?php
        if (isset($_POST['enviar']) && empty($_POST['usuario']))
            echo "<span style='color:red'>&#8592; ¡Debes introducir un Usuario!!</span>"
        ?>

        <br><br>


        <label for="titulo">Contraseña: </label>
        <input type="password" name="contrasenya" id="contrasenya"
            value="<?php if (isset($_POST['contrasenya'])) echo $_POST['contrasenya']; ?>">

        <?php
        if (isset($_POST['enviar']) && empty($_POST['contrasenya']))
            echo "<span style='color:red'>&#8592; ¡Debes introducir una Contraseña!!</span>"
        ?>
        <br>
        <br>
        <label for="titulo">Repetir Contraseña: </label>
        <input type="password" name="rep_contra" id="rep_contra"
            value="<?php if (isset($_POST['rep_contra'])) echo $_POST['rep_contra']; ?>">

        <?php
        if (isset($_POST['enviar']) && empty($_POST['rep_contra']))
            echo "<span style='color:red'>&#8592; ¡Debes repetir la Contraseña!!</span>"
        ?>
        <br>
        <br>

        <button type="submit" name="enviar">Registrame</button>

    </form>

    <?php

    function getConexion()
    {
        $host = "localhost";
        $db = "bdcine";
        $user = "root";
        $pass = "root";
        $conexion = new PDO("mysql:host=$host;dbname=$db;", $user, $pass);
        return $conexion;
    }

    function insertarUsuario($usuario, $contrasenya)
    {


        $conexion = getConexion();

        $sql = 'INSERT INTO usuarios (usuario, contrasena) 
                    VALUES (:usuarios, :contrasena)';

        $resultado = $conexion->prepare($sql);
        $resultado->bindParam(":usuarios", $usuario);
        $resultado->bindParam(":contrasena", $contrasenya);
        //$resultado->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        if (!$resultado) {
            $mensaje = "Error al crear el usuario";
        } else {
            if ($resultado->execute() == true) {
                $mensaje = "Usuario creado correctamente";
                header("Refresh:0.0; url=./cine_login.php");
            } else {
                $mensaje = "No se ha podido crear el usuario. Puede ser que usuario yaa exista en la Base de datos.";
            }
        }

    ?>
    <script>
    alert('<?php echo $mensaje ?>');
    </script>
    <?php
    }

    if (!empty($_POST['usuario']) && !empty($_POST['contrasenya']) && !empty($_POST['rep_contra'])) {

        $usuario = $_POST['usuario'];
        $contrasenya = $_POST['contrasenya'];
        $rep_contra = $_POST['rep_contra'];


        if ($rep_contra == $contrasenya) {
            echo insertarUsuario($usuario, sha1($contrasenya));
        } else {
        ?>
    <script>
    alert('<?php echo "La contraseña esta mal" ?>');
    </script><?php
                    }
                }

                        ?>

</body>

</html>