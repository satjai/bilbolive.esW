<?php
header('Content-type: text/xml');
// Incluimos el archivo de clases
include "class.firmador.php";
// Declaramos el nuevo objeto Firmador
$firma = new Firmador();
$myxml = $firma->firmar('CERT.NOTEBUK.p12','1234','tbaiXml.xml');
echo $myxml;
?>