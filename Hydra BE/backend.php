<?php
$servername = "%"; // or your MySQL server address
$username = "silliconsingam";
$password = "krishna2324";
$dbname = "BLUENUAL";

// Create connection
$conn = new mysqli(hostname: $servername, username: $username, password: $username, database: $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
/*************  ✨ Codeium Command 🌟  *************/
$sql = "SELECT S.NO, PRODUCT, WATERFOOTPRINTS,REGION, WEATHER, SOIL, SOLUTION FROM BLUENUAL";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "S.NO: " . $row["S.NO"] . " PRODUCT: " . $row["PRODUCT"] . "WATERFOOTPRINTS: " . $row["WATERFOOTPRINTS"] . "REGION: " . $row["REGION"] . "WEATHER: " . $row["WEATHER"] . "SOIL: " . $row["SOIL"] . "SOLUTION: " . $row["SOLUTION"] . "" . $row["lastname"] . "<br>";
    }
} else {
    echo "0 results";
}
?>
/****** e1060076-b034-4b72-9531-c94a35f10fc0 *******/¯