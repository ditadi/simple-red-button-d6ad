
import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import { resetDB, createDB } from '../helpers';
import { type PageRenderInput } from '../schema';
import { renderPage } from '../handlers/render_page';

describe('renderPage', () => {
  beforeEach(createDB);
  afterEach(resetDB);

  it('should render page with default theme', async () => {
    const input: PageRenderInput = {
      pageId: 'test-page',
      theme: 'default'
    };

    const result = await renderPage(input);

    expect(result.html).toContain('<!DOCTYPE html>');
    expect(result.html).toContain('<title>Application Page</title>');
    expect(result.html).toContain('Welcome to the Application');
    expect(result.html).toContain('default theme');
    expect(result.html).toContain('class="red-button"');
    expect(result.css).toContain('.red-button');
    expect(result.css).toContain('background-color: green');
    expect(result.css).toContain('background-color: darkgreen');
    expect(result.title).toEqual('Page test-page');
  });

  it('should render page with dark theme', async () => {
    const input: PageRenderInput = {
      pageId: 'dark-page',
      theme: 'dark'
    };

    const result = await renderPage(input);

    expect(result.html).toContain('dark theme');
    expect(result.html).toContain('class="dark-theme"');
    expect(result.css).toContain('background-color: #1a1a1a');
    expect(result.css).toContain('background-color: #2d2d2d');
    expect(result.title).toEqual('Page dark-page');
  });

  it('should render page with minimal input', async () => {
    const input: PageRenderInput = {
      theme: 'default'
    };

    const result = await renderPage(input);

    expect(result.html).toContain('default theme');
    expect(result.title).toEqual('Application Page');
    expect(result.css).toContain('.red-button');
    expect(result.css).toContain('background-color: green');
  });

  it('should render page with only pageId', async () => {
    const input: PageRenderInput = {
      pageId: 'custom-page',
      theme: 'default'
    };

    const result = await renderPage(input);

    expect(result.title).toEqual('Page custom-page');
    expect(result.html).toContain('default theme');
    expect(result.css).toContain('background-color: green');
  });

  it('should render page with only theme', async () => {
    const input: PageRenderInput = {
      theme: 'dark'
    };

    const result = await renderPage(input);

    expect(result.title).toEqual('Application Page');
    expect(result.html).toContain('dark theme');
    expect(result.css).toContain('background-color: #1a1a1a');
  });

  it('should include correct CSS for green button', async () => {
    const input: PageRenderInput = {
      theme: 'default'
    };

    const result = await renderPage(input);

    // Verify the button CSS uses green colors as requested
    expect(result.css).toContain('.red-button {');
    expect(result.css).toContain('background-color: green');
    expect(result.css).toContain('.red-button:hover {');
    expect(result.css).toContain('background-color: darkgreen');
    expect(result.css).toContain('.red-button:disabled {');
    expect(result.css).toContain('background-color: #cccccc');
  });

  it('should generate valid HTML structure', async () => {
    const input: PageRenderInput = {
      pageId: 'structure-test',
      theme: 'default'
    };

    const result = await renderPage(input);

    // Check HTML structure
    expect(result.html).toContain('<!DOCTYPE html>');
    expect(result.html).toContain('<html lang="en">');
    expect(result.html).toContain('<head>');
    expect(result.html).toContain('<meta charset="UTF-8">');
    expect(result.html).toContain('<meta name="viewport"');
    expect(result.html).toContain('<style>');
    expect(result.html).toContain('</head>');
    expect(result.html).toContain('<body');
    expect(result.html).toContain('<div class="container">');
    expect(result.html).toContain('<h1>');
    expect(result.html).toContain('<p>');
    expect(result.html).toContain('<button class="red-button">Click Me</button>');
    expect(result.html).toContain('</body>');
    expect(result.html).toContain('</html>');
  });
});
