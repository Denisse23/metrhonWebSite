<?php

include ("conectx.php");

if (isset($_POST['Empresa']) && !empty($_POST['Empresa'])&&
isset($_POST['Contactoema']) && !empty($_POST['Contactoema']) &&
isset($_POST['direccion']) && !empty($_POST['direccion'])&&
isset($_POST['Noparticipantes']) && !empty($_POST['Noparticipantes'])&&
isset($_POST['LUGAR']) && !empty($_POST['LUGAR'])&&
isset($_POST['salon']) && !empty($_POST['salon'])&&
isset($_POST['pizarra']) && !empty($_POST['pizarra'])&&
isset($_POST['datashow']) && !empty($_POST['datashow'])&&
isset($_POST['refrigmat']) && !empty($_POST['refrigmat'])&&
isset($_POST['almuerzo']) && !empty($_POST['almuerzo'])&&
isset($_POST['refrivesp']) && !empty($_POST['refrivesp'])
)
{


$Empresa = $_POST["Empresa"];
$telefonoempr = $_POST["telefonoempr"];
$direccion = $_POST["direccion"];
$Contactonom = $_POST["Contactonom"];
$Contactotel = $_POST["Contactotel"];
$Contactoema = $_POST["Contactoema"];
$Noparticipantes = $_POST["Noparticipantes"];
$temadetallle = $_POST["temadetallle"];
$MIMPR = $_POST["MIMPR"];
$MDIGI = $_POST["MDIGI"];
$CERPAR = $_POST["CERPAR"];
$CERAPR = $_POST["CERAPR"];
$LUGAR = $_POST["LUGAR"];
$detlugar = $_POST["detlugar"];
$salon = $_POST["salon"];
$pizarra = $_POST["pizarra"];
$datashow = $_POST["datashow"];
$refrigmat = $_POST["refrigmat"];
$almuerzo = $_POST["almuerzo"];
$refrivesp = $_POST["refrivesp"];
$observaciones = $_POST["observaciones"];
$T01 = $_POST["T01"];
$T02 = $_POST["T02"];
$T03 = $_POST["T03"];
$T04 = $_POST["T04"];
$T05 = $_POST["T05"];
$T06 = $_POST["T06"];
$T07 = $_POST["T07"];
$T08 = $_POST["T08"];
$T09 = $_POST["T09"];
$T10 = $_POST["T10"];
$T11 = $_POST["T11"];
$T12 = $_POST["T12"];
$T13 = $_POST["T13"];
$T14 = $_POST["T14"];
$T15 = $_POST["T15"];
$T16 = $_POST["T16"];
$T17 = $_POST["T17"];
$T18 = $_POST["T18"];


//parse_str($REPORTE);

$con = mysql_connect ($host, $user, $pw)
or die ("Pro_server");
       
mysql_select_db ($db,$con)
or die ("pro_select_db");



mysql_query("INSERT INTO capacitac
(Empresa,
telefonoempr,
direccion,
Contactonom,
Contactotel,
Contactoema,
Noparticipantes,
temadetallle,
MIMPR,
MDIGI,
CERPAR,
CERAPR,
LUGAR,
detlugar,
salon,
pizarra,
datashow,
refrigmat,
almuerzo,
refrivesp,
observaciones,
T01,
T02,
T03,
T04,
T05,
T06,
T07,
T08,
T09,
T10,
T11,
T12,
T13,
T14,
T15,
T16,
T17,
T18,
fecha) 
VALUES(
'$Empresa',
'$telefonoempr',
'$direccion',
'$Contactonom',
'$Contactotel',
'$Contactoema',
'$Noparticipantes',
'$temadetallle',
'$MIMPR',
'$MDIGI',
'$CERPAR',
'$CERAPR',
'$LUGAR',
'$detlugar',
'$salon',
'$pizarra',
'$datashow',
'$refrigmat',
'$almuerzo',
'$refrivesp',
'$observaciones',
'$T01',
'$T02',
'$T03',
'$T04',
'$T05',
'$T06',
'$T07',
'$T08',
'$T09',
'$T10',
'$T11',
'$T12',
'$T13',
'$T14',
'$T15',
'$T16',
'$T17',
'$T18',
CURDATE())",
$con) or die ("pro_insert_db");


   header('Location: http://www.metrhon.com/enviado.html');

}

else {readfile("error.html");}
   
?>