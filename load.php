<?php
$conn = new mysqli("localhost", "root", "", "site_data");
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

$result = $conn->query("SELECT content FROM page_content ORDER BY updated_at DESC LIMIT 1");
if ($row = $result->fetch_assoc()) {
    echo $row['content'];
}
$conn->close();
?>
