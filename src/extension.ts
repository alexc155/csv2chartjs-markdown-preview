"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as yaml from "js-yaml";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "Chartjs-markdown-preview" is now active!'
  );
  return {
    extendMarkdownIt(md) {
      const highlight = md.options.highlight;

      md.options.highlight = (code, lang) => {
        if (lang && lang.match(/\bchart\b/i)) {
          const render = src => `<canvas class="chartjs">${src}</canvas>`;
          const trim = code.trim();
          if (trim[0] == '{') { // js
            return render(trim);
          }
          else { // yaml
            try {
              const doc = yaml.load(trim);
              const json = JSON.stringify(doc, null, 2);
              console.log(json);
              return render(json);
            } catch (e) {
              console.log(e);
              return `<code>${e}</code>`;
            }
          }
        }

        return highlight(code, lang);
      };

      return md;
    }
  };
}

// this method is called when your extension is deactivated
export function deactivate() { }
