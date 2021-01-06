<?php
$peli = $_GET['pelicula'];
include('../tcpdf/config/tcpdf_config.php');
include('../tcpdf/tcpdf.php');
session_start();
$pdf = new TCPDF();
$pdf->AddPage();
$pdf->setPrintHeader(false);
$pdf->setPrintFooter(false);
$pdf->SetAuthor("RAGNAROK");
$pdf->SetCreator('Justificante cine');

$posicion = intval($_GET['asiento']) + 1;
$fila = 1;
while ($posicion > 10) {
    $posicion -= 10;
    $fila++;
}
$html = '
<br />
<br />
<img src="../imagenes/logo.png" alt="Cine">
<br />
<br />
<table style=\'border= 1px solid black\'>
<tr>
<td><strong> &nbsp;&nbsp;PELICULA</strong></td>
<td>' . $peli . '</td>
</tr>
<tr>
<td><strong> &nbsp;&nbsp;&nbsp;FILA</strong></td>
<td>' . $fila . '</td>
</tr>
<tr>
<td><strong>&nbsp;&nbsp;&nbsp;&nbsp;BUTACA</strong></td>
<td>' . $posicion . '</td>
</tr>
<br />
<tr>
<td> &nbsp;&nbsp;Presente esta entrada en la taquilla</td>
</tr>
</table>';

$html = utf8_encode($html);

$pdf->writeHTML($html, true, false, true, false);
$pdf->lastPage();
$pdf->Output('ticket.pdf', 'D');
