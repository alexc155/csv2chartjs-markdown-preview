'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

function csvToChartJS(code: string) {
  const labels: string[] = [];
  const data: number[][] = [];
  let yLabel: string = '';
  const xLabels: string[] = [];
  const colors: string[] = ['#FF6384', '#37A2EB', '#4ABDBD', '#F89F40', '#9966FF', '#F7CA56', '#C9CBCF'];

  for (const line of code.split('\n')) {
    // first line has headers
    if (!yLabel) {
      const elements = line.split(',');
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (i === 0) {
          yLabel = element;
        } else {
          xLabels.push(element);
        }
      }
    } else {
      const elements = line.split(',');
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (i === 0) {
          labels.push(element);
        } else {
          if (data.length < i) {
            data.push([]);
          }
          data[i - 1].push(parseInt(element));
        }
      }
    }
  }

  return `{
    "type": "line",
    "options": {
      "scales":{
        "y": {
          "beginAtZero": true
        }
      }
    },
    "data": {
        "labels": ["${labels.join('","')}"],
        "datasets": [
            ${data
              .map((x, i) => {
                return `{
                "label": "${xLabels[i]}",
                "data": [${x.join(',')}],
                "fill": false,
                "borderColor": "${colors[i]}",
                "backgroundColor": "${colors[i]}",
                "tension": 0
            }`;
              })
              .join(',')}
        ]
    }
}`;
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  return {
    extendMarkdownIt(md) {
      const highlight = md.options.highlight;

      md.options.highlight = (code, lang) => {
        if (lang?.match(/\bjs\b/i) && code.trim().indexOf('// chart-js') === 0) {
          return `<canvas class="chartjs">${code.trim().replace(/^\/\/ chart-js/, '')}</canvas>`;
        } else if (lang?.match(/\bchart\b/i)) {
          return `<canvas class="chartjs">${code.trim()}</canvas>`;
        } else if (lang?.match(/\bcsv\b/i) && code.trim().indexOf('# chart-js') === 0) {
          const jsObj = csvToChartJS(
            code
              .trim()
              .replace(/^# chart-js/, '')
              .trim()
          );

          const codeSection = `<pre>\`\`\`js\n// chart-js\n\n${jsObj}\n\`\`\`</pre>`;
          const chartCanvas = `<canvas class="chartjs">${jsObj}</canvas>`;
          return codeSection + chartCanvas;
        }
        return highlight(code, lang);
      };

      return md;
    },
  };
}

// this method is called when your extension is deactivated
export function deactivate() {
  return;
}
