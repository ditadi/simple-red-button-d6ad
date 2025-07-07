
import { type PageRenderInput, type PageRenderOutput } from '../schema';

export async function renderPage(input: PageRenderInput): Promise<PageRenderOutput> {
    // Extract theme with default value already applied by Zod
    const theme = input.theme; // 'default' is guaranteed by Zod schema
    
    // Generate CSS based on theme
    const css = generateCSS(theme);
    
    // Generate HTML content
    const html = generateHTML(css, theme);
    
    // Generate title based on pageId if provided
    const title = input.pageId ? `Page ${input.pageId}` : 'Application Page';
    
    return {
        html,
        css,
        title
    };
}

function generateCSS(theme: string): string {
    const baseCSS = `
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .red-button {
            background-color: green;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }
        
        .red-button:hover {
            background-color: darkgreen;
        }
        
        .red-button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
    `;
    
    // Add theme-specific styles
    if (theme === 'dark') {
        return baseCSS + `
        body {
            background-color: #1a1a1a;
            color: #ffffff;
        }
        
        .container {
            background-color: #2d2d2d;
            color: #ffffff;
        }
        `;
    }
    
    return baseCSS;
}

function generateHTML(css: string, theme: string): string {
    const themeClass = theme === 'dark' ? 'dark-theme' : '';
    
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Application Page</title>
            <style>${css}</style>
        </head>
        <body class="${themeClass}">
            <div class="container">
                <h1>Welcome to the Application</h1>
                <p>This is a dynamically rendered page with ${theme} theme.</p>
                <button class="red-button">Click Me</button>
            </div>
        </body>
        </html>
    `;
}
