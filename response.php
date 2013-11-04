<?php
header('Access-Control-Allow-Origin: *');
$user = $_POST["user"];
$pass = $_POST["pass"];

$udb = "u669933741_trav";
$pdb = "utnfrre";

try{
	$conexion = new PDO('mysql:host=mysql.hostinger.com.ar;dbname=u669933741_trave', $udb ,$pdb);
	$sql ="SELECT user, pass FROM  `login`";

	$sentence = $conexion->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
	$sentence->execute();
	$result = $sentence->fetchAll();
	foreach ($result as $value) {
		if($value["user"]== $user && $value["pass"] == $pass){
			$rta = true;
		}
	}
	if($rta){
		echo("Oka");
	}else{
		echo("Nope");
	}
}catch(PDOException $e){
	echo("Something is wrong ;( ".$e->getMessage());
}