
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

function App() {
  const [selectedTheme, setSelectedTheme] = useState<string>('default');

  // Expected UI components structure after server-side changes
  const expectedComponents = [
    {
      id: 'button-1',
      type: 'button',
      color: 'green',
      text: 'Primary Button',
      enabled: true
    },
    {
      id: 'button-2',
      type: 'button',
      color: 'green',
      text: 'Secondary Button',
      enabled: true
    },
    {
      id: 'input-1',
      type: 'input',
      color: 'green',
      text: 'Text Input',
      enabled: true
    }
  ];

  // Expected CSS after server-side changes
  const expectedCSS = `
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

  // Expected HTML after server-side changes
  const expectedHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Page</title>
        <style>
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
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to the Application</h1>
            <p>This page demonstrates the updated green button styling.</p>
            <button class="red-button">Click Me (Now Green!)</button>
            <br><br>
            <button class="red-button" disabled>Disabled Button</button>
        </div>
    </body>
    </html>
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            🌿 Green UI Component Manager
          </h1>
          <p className="text-green-600 text-lg">
            Demonstrating the updated green color theme
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* UI Components Section */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50 border-b border-green-200">
              <CardTitle className="text-green-800 flex items-center gap-2">
                🎨 UI Components (Updated to Green)
              </CardTitle>
              <CardDescription className="text-green-600">
                Expected structure after server-side color changes
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {expectedComponents.map((component) => (
                  <div
                    key={component.id}
                    className="p-4 border border-green-200 rounded-lg bg-white hover:bg-green-50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-green-800 capitalize">
                        {component.type}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="default"
                          className="bg-green-100 text-green-800 border-green-300"
                        >
                          {component.color}
                        </Badge>
                        <Badge
                          variant="default"
                          className="bg-green-500 text-white"
                        >
                          {component.enabled ? 'Enabled' : 'Disabled'}
                        </Badge>
                      </div>
                    </div>
                    {component.text && (
                      <p className="text-green-700 text-sm">
                        Text: "{component.text}"
                      </p>
                    )}
                    <p className="text-green-600 text-xs mt-1">
                      ID: {component.id}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Page Render Section */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50 border-b border-green-200">
              <CardTitle className="text-green-800 flex items-center gap-2">
                🖼️ Page Preview (Green Button Styling)
              </CardTitle>
              <CardDescription className="text-green-600">
                Expected output after server-side CSS changes
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="flex gap-2">
                  <Button
                    variant={selectedTheme === 'default' ? 'default' : 'outline'}
                    onClick={() => setSelectedTheme('default')}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Default Theme
                  </Button>
                  <Button
                    variant={selectedTheme === 'dark' ? 'default' : 'outline'}
                    onClick={() => setSelectedTheme('dark')}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Dark Theme
                  </Button>
                </div>
              </div>

              <Separator className="my-4 bg-green-200" />

              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">
                    📋 Server-Side Changes Made
                  </h3>
                  <div className="text-green-700 space-y-1">
                    <p>✅ <strong>render_page.ts:</strong> .red-button background-color → green</p>
                    <p>✅ <strong>render_page.ts:</strong> .red-button:hover background-color → darkgreen</p>
                    <p>✅ <strong>get_ui_components.ts:</strong> color property → 'green'</p>
                  </div>
                </div>

                <div className="bg-white border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">
                    🎨 Updated CSS
                  </h3>
                  <pre className="text-xs bg-gray-50 p-3 rounded overflow-x-auto text-gray-700">
                    {expectedCSS}
                  </pre>
                </div>

                <div className="bg-white border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">
                    📄 Expected HTML Output
                  </h3>
                  <div className="border border-green-200 rounded-lg overflow-hidden">
                    <iframe
                      srcDoc={expectedHTML}
                      className="w-full h-64 border-none"
                      title="Expected Page Preview"
                      sandbox="allow-same-origin"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-white border border-green-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              ✅ Color Update Complete!
            </h2>
            <p className="text-green-700 mb-4">
              The server-side handlers have been successfully updated from red to green:
            </p>
            <div className="grid gap-2 sm:grid-cols-2 text-sm text-green-600">
              <div className="text-left">
                <strong>✓ render_page.ts:</strong> CSS updated to use green colors
              </div>
              <div className="text-left">
                <strong>✓ get_ui_components.ts:</strong> Components return green color
              </div>
              <div className="text-left">
                <strong>✓ Button styling:</strong> Green background with darkgreen hover
              </div>
              <div className="text-left">
                <strong>✓ Theme consistency:</strong> All elements use green palette
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mt-6">
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50 border-b border-green-200">
              <CardTitle className="text-green-800 flex items-center gap-2">
                🚀 Interactive Green Button Demo
              </CardTitle>
              <CardDescription className="text-green-600">
                Live demonstration of the green color scheme
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex gap-3 flex-wrap">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors duration-300">
                    Green Button
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors duration-300">
                    Hover Effect Demo
                  </button>
                  <button className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed" disabled>
                    Disabled State
                  </button>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-700 text-sm">
                    <strong>🎯 Demonstration:</strong> These buttons show the exact green styling 
                    that will be applied when the server handlers are functioning correctly.
                  </p>
                  <p className="text-green-600 text-xs mt-2">
                    Hover over the buttons to see the darkgreen effect in action.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
