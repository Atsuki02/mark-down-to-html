<?php
require_once __DIR__ . '/../vendor/autoload.php';
$Parsedown = new Parsedown();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $markdown = $_POST['markdown'] ?? '';
    $html = $Parsedown->text($markdown);
    echo $html;
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Markdown Editor</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/loader.min.js" defer></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="app-container">
        <header>
            <h1>Markdown Editor</h1>
        </header>
        <main>
            <div class="editor-section">
                <div id="editor-container"></div>
            </div>
            <div class="preview-section">
                <div id="preview-container"></div>
            </div>
        </main>
        <footer>
            <button id="preview-btn" class="btn"><i class="fas fa-eye"></i> Preview</button>
            <button id="html-btn" class="btn"><i class="fas fa-code"></i> HTML</button>
            <button id="download-btn" class="btn"><i class="fas fa-download"></i> Download</button>
        </footer>
    </div>
    <script src="script.js" defer></script>
</body>
</html>