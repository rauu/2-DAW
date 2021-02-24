<?php

$id = $_GET['id'];

function getConexion()
{
    $host = "localhost";
    $db = "bdusuarios";
    $user = "root";
    $pass = "";

    $conexion = new PDO("mysql:host=$host;dbname=$db;", $user, $pass);

    return $conexion;
}

function eliminarDatos($id)
{
    $conexion = getConexion();

    $sql = "DELETE FROM libros WHERE id = :id";

    $resultado = $conexion->prepare($sql);
    $resultado->bindParam(':id', $id);
    if (!$resultado) {
        $mensaje = "El registro no se ha podido eliminar";
       
    } else {
        $resultado->execute();

        $mensaje = "Registro elimnado correctamente";
    }
    //echo $mensaje;
    return $mensaje;
}
echo eliminarDatos($id);

echo "<br><br><a href=\"pagina.php\">Volver a la pagina principal</a>";
