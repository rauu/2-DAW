<?php ob_start() ?>

<h2>Ver Alimentos</h2>
<form name="formBusqueda" action="index.php?ruta=listarOrdenados" method="POST">
    Ordenar por
    <select name="ordenar" id="ordenar">
        <option <?php if(isset($_POST['ordenar']) && $_POST['ordenar'] == "nombre"){echo "selected";}?> value="nombre">nombre</option>
        <option <?php if(isset($_POST['ordenar']) && $_POST['ordenar'] == "energia"){echo "selected";}?> value="energia">energia</option>
        <option <?php if(isset($_POST['ordenar']) && $_POST['ordenar'] == "grasatotal"){echo "selected";}?> value="grasatotal">grasa</option>
    </select>
    en sentido
    <select name="asceDesce" id="asce">
        <option <?php if(isset($_POST['asceDesce']) && $_POST['asceDesce'] == "asc"){echo "selected";}?> value="asc">ascendente</option>
        <option <?php if(isset($_POST['asceDesce']) && $_POST['asceDesce'] == "desc"){echo "selected";}?> value="desc">descendente</option>
    </select>
    <input type="submit" value="ordenar" />
</form>

<?php if (count($params['ordenaros']) > 0) : ?>
    <table>
        <tr>
            <th>alimento (por 100g)</th>
            <th>energia (Kcal)</th>
            <th>grasa (g)</th>
        </tr>
        <?php foreach ($params['ordenaros'] as $alimento) : ?>
            <tr>
                <td><a href="index.php?ruta=ver&id=<?php echo $alimento['id'] ?>"><?php echo $alimento['nombre'] ?></a></td>
                <td><?php echo $alimento['energia'] ?></td>
                <td><?php echo $alimento['grasatotal'] ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
<?php endif; ?>



<?php $contenido = ob_get_clean() ?>
<?php include 'layout.php' ?>