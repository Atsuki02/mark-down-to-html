# Markdown Editor

## Overview

This Markdown Editor is a web-based application that allows users to write Markdown and see the rendered HTML output in real-time. It provides a seamless editing experience with instant preview capabilities, making it an excellent tool for content creators, developers, and anyone who works with Markdown regularly.

![alt text](<Screenshot from 2024-08-03 23-03-56.png>)

## Features

- **Live Preview**: As you type Markdown in the editor, see the rendered HTML output instantly in the preview pane.
- **HTML View**: Toggle between the rendered preview and the raw HTML output.
- **Monaco Editor Integration**: Utilizes the powerful Monaco Editor for a smooth and feature-rich editing experience.
- **Prettier Integration**: Uses Prettier to format the HTML output for better readability.
- **Download Functionality**: Easily download your Markdown content as an HTML file.

## Technology Stack

- Frontend: HTML, CSS, JavaScript
- Editor: Monaco Editor
- Markdown Conversion: PHP (server-side)
- HTML Formatting: Prettier
- Dependencies Management: erusev/parsedown

## How to Use

1. **Writing Markdown**: Type your Markdown content in the left pane of the editor.
2. **Previewing**: Click the "Preview" button to see the rendered HTML in the right pane.
3. **Viewing HTML**: Click the "HTML" button to see the raw HTML output.
4. **Downloading**: Click the "Download" button to save your work as an HTML file.

## Requirements
- PHP 7.4 or higher
- Composer

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mark-down-to-html.git
   ```
2. Navigate to the project directory:
   ```
   cd mark-down-to-html
   ```
3. Install Composer dependencies:
   ```
   composer install
   ```

## Usage
1. Start a web server (using PHP's built-in server):
   ```
   php -S localhost:8000 -t public
   ```
2. Access `http://localhost:8000` in your browser.

## Project Structure
```
mark-down-to-html/
│
│
├── public/
│   └── index.php
│   └── script.js
│   └── css/
│       └── styles.css
│
├── vendor/
├── composer.json
├── composer.lock
└── .gitignore
```

