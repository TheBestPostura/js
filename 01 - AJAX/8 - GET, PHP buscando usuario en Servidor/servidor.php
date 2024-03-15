<?php

$personas = array("Ana", "Alberto", "Beto", "Cindy", "David",
                    "Esteban", "Fiorela", "Guisela", "Henry",
                "Irma", "Pedro", "Amelia", "Rocio", "Doris", 
                "Oscar", "Pedro", "Amelaia", "Rocio", "Doris",
                "Erica", "Emilia", "Susan", "Teresa", "Ursula",
                "Victor", "Liliana", "Ernesto", "Willy", "Viviana");

$nombre = $_GET["nombre"];

$sugerencia = "";

if($nombre !== ""){
    $nombre = strtolower($nombre);
    $cantidadDeCaracteres = strlen($nombre);

    foreach($personas as $persona){
        $nombreEnServidor = substr($persona, 0, $cantidadDeCaracteres);

        if(stristr($nombre, $nombreEnServidor) !== false){
            if($sugerencia === ""){
                $sugerencia = $persona;
            }else{
                $sugerencia .= ", $persona";
            }
        }
    }
}
echo $sugerencia === "" ? "No fue encontrado" : $sugerencia;
?>