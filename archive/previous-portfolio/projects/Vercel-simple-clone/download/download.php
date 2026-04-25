<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download</title>
</head>
<body>
    <h2>
        File currenctly saved : 
    </h2>

    <!-- diplay all pdf file in the university folder  -->
    <?php
    $folderPath = dirname(__DIR__) . "\download\media\university\\";
    //echo $folderPath;
    $pdfFiles = glob($folderPath . "/*.pdf");

    if (!empty($pdfFiles)) {
        echo "<ul>";
        foreach ($pdfFiles as $pdfFile) {
            echo "<li><a href='$pdfFile' target='_blank'>$pdfFile</a></li>";
        }
        echo "</ul>";
    } else {
        echo "<p>No PDF files found in the folder.</p>";
    }
    ?>
</body>
</html>