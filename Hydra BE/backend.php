<?php
$servername = "localhost"; // or your MySQL server address
$username = "Sillicon singam";
$password = "krishna2324";
$dbname = "BLUENUAL";

// Create connection
$conn = new mysqli($localhost, $Silliconsingam, $krishna2324, $BLUENUAL);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
