<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio10</title>
</head>

<body>
    <?php

    $alumni = ["Raunak", "Victor", "Angel", "Lucia", "Alejandro", "Jesus"];
    $alumni2 = ["Raunak", "Victor", "Angel", "Lucia", "Alejandro", "Jesus"];

    echo "Valor array</br>";
    //Mostrar array
    foreach ($alumni as $x) {
        echo $x . "</br>";
    }

    echo "</br></br></br></br></br>";

    //funcion implode cadena que contenga los nombres de l@s alumn@s existentes en el array, separados por coma y espacio

    echo "Funcion implode</br>";
    $implode_Array = implode(", ", $alumni);

    echo $implode_Array . "</br>";

    echo "</br></br></br></br></br>";

    //array short(PARTE D)
    echo "Array alfabéticamente</br>";
    sort($alumni);
    print_r($alumni);

    echo "</br></br></br></br></br>";

    //array_reverse(PARTE E)
    echo "Array inverso</br>";

    $reversed = array_reverse($alumni2);
    print_r($reversed);
    echo "</br></br></br></br></br>";


    //array_search(PARTE F)

    echo "Array Search (Posicion de Raunak)</br>";
    echo array_search('Raunak', $alumni2);
    echo "</br></br></br></br></br>";

    //array asociativo (PARTE G)

    $alumno = [
        array("id" => "0000", "nombre" => "Raunak", "edad" => "20"),
        array("id" => "0001", "nombre" => "Victor", "edad" => "22"),
        array("id" => "0002", "nombre" => "Angel", "edad" => "21"),
        array("id" => "0003", "nombre" => "Lucia", "edad" => "26"),
        array("id" => "0004", "nombre" => "Jesus", "edad" => "29"),
        array("id" => "0005", "nombre" => "Tonet", "edad" => "34"),
        array("id" => "0006", "nombre" => "Alex", "edad" => "27")

    ];

    //tabla HTML para mostrar los datos de alumno(PARTE F)
    ?>
    <table border>

        <?php

        foreach ($alumno as $x) {
            echo "<tr>";

            foreach ($x as $clave => $valor) {
                echo "<td>" . $clave . "</td>";
                echo "<td>" . $valor . "</td>";
            }
            echo "</tr>";
        }
        echo "</tr>";

        ?>

    </table>


    <?php
    //ARRAY COLUMN
    echo "</br></br></br></br></br>";


    echo "Array_Column</br>";
    $nombres = array_column($alumno, 'nombre');
    print_r($nombres);
    echo "</br></br></br></br></br>";

    ?>




</body>

</html>