<?php
// الاتصال بقاعدة البيانات
$conn = new mysqli("localhost", "root", "", "site_data");
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

// استلام المحتوى المرسل
$content = $_POST['content'] ?? '';

if ($content != '') {
    // نخزن نسخة واحدة فقط (أحدث تعديل)
    $conn->query("DELETE FROM page_content"); 
    $stmt = $conn->prepare("INSERT INTO page_content (content) VALUES (?)");
    $stmt->bind_param("s", $content);
    $stmt->execute();
    echo "Saved";
}
$conn->close();
?>
