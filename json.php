<?php
error_reporting(E_ALL);

$mysqlTable = "blue";

// connection + test
$mysqli = new mysqli("localhost", "root", "root", "twittertest");

if ($mysqli->connect_errno) {
	printf("Échec de la connexion : %s\n", $mysqli->connect_error);
    exit();
}
// requête
$result = $mysqli->query("SELECT * FROM {$mysqlTable}");

// mise des résultats dans une array
// en utilisant une boucle while/fetch 
$json = array();
while($row = mysqli_fetch_array ($result))    {
	    $tweet = array(
	        'id' => $row['id'],
	        'from_user' => $row['from_user'],
	        'text' => $row['text']
	    );
	    array_push($json, $tweet);
	}

// encoder l'array en json et l'afficher
$jsonstring = json_encode($json);
echo $jsonstring;

// fermer la database (à vérifier)
$result->close();

?>