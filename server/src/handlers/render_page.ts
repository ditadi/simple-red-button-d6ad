
export const renderPage = async (page: string = 'home'): Promise<string> => {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is rendering a complete HTML page with the specified components.
    // Returns HTML string with a red button that says "hello" and has no click action.
    
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple Red Button Page</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                margin: 0;
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
            }
            .red-button {
                background-color: red;
                color: white;
                border: none;
                padding: 12px 24px;
                font-size: 16px;
                border-radius: 4px;
                cursor: pointer;
                outline: none;
            }
            .red-button:hover {
                background-color: darkred;
            }
        </style>
    </head>
    <body>
        <button class="red-button" onclick="void(0)">hello</button>
    </body>
    </html>
    `;
    
    return htmlContent;
};
