<?php ob_start() ?>

<h2>Eliminar por nombre</h2>
<form name="formBusqueda" action="index.php?ruta=eliminarPorNombre" method="POST">
    <label for="nombre">nombre alimento:</label>
    <input type="text" name="nombre" id="nombre" value="<?php echo $params['nombre'] ?>" />
    <span>(el nombre tiene que ser exacto)</span>
    <input type="submit" value="Eliminar" />
</form>


<?php $contenido = ob_get_clean() ?>
<?php include 'layout.php' ?>