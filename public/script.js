require.config({
    paths: {
        'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs',
        'prettier': 'https://cdn.jsdelivr.net/npm/prettier@2.6.2/standalone',
        'prettierParserHtml': 'https://cdn.jsdelivr.net/npm/prettier@2.6.2/parser-html'
    }
});

require(['vs/editor/editor.main', 'prettier', 'prettierParserHtml'], function(monaco, prettier, prettierParserHtml) {
    var editor = monaco.editor.create(document.getElementById('editor-container'), {
        value: '',
        language: 'markdown',
    });
    
    const previewContainer = document.getElementById('preview-container');
    let displayMode = 'preview';

    function convertToHTML(markdown) {
        return fetch('index.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'markdown=' + encodeURIComponent(markdown)
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text()
        })
    }

    function escapeHtml(html) {
        return html.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function updatePreview() {
        const markdown = editor.getValue();
        convertToHTML(markdown).then(html => {
            if (displayMode === 'preview') {
                previewContainer.innerHTML = html;
            } else {
                let beautifulHtml = prettier.format(html, {
                    parser: 'html',
                    plugins: [prettierParserHtml],
                    htmlWhitespaceSensitivity: 'ignore',
                    printWidth: 80
                });
                let escapedHtml = escapeHtml(beautifulHtml);
                previewContainer.innerHTML = `<pre><code>${escapedHtml}</code></pre>`;
            }
        }).catch(error => {
            console.error(error);
            previewContainer.innerHTML = '<p>Error converting Markdown to HTML</p>';
        });
    }

    function downloadContent(filename, content) {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    document.getElementById('preview-btn').addEventListener('click', () => {
        displayMode = 'preview';
        updatePreview();
    });

    document.getElementById('html-btn').addEventListener('click', () => {
        displayMode = 'html';
        updatePreview();
    });

    document.getElementById('download-btn').addEventListener('click', () => {
        const markdown = editor.getValue();
        convertToHTML(markdown).then(html => {
            downloadContent('markdown.html', html);
        }).catch(error => {
            console.error(error);
            alert('Error downloading HTML');
        });
    });

    editor.onDidChangeModelContent(updatePreview);
    updatePreview();
});