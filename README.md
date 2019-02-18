# Chart.js Markdown Preview

Adds [Chart.js](https://www.chartjs.org/) support to VS Code's builtin markdown preview

![](https://github.com/FlomoN/chartjs-markdown-preview/blob/master/docs/preview.PNG)


## Usage
Create diagrams in markdown using `chart` code blocks:

~~~markdown
```chart
{
  "type": "pie",
  "data": {
    "labels": [
      "Red",
      "Blue",
      "Yellow"
    ],
    "datasets": [
      {
        "data": [
          300,
          50,
          100
        ],
        "backgroundColor": [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        "hoverBackgroundColor": [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }
    ]
  },
  "options": {}
}
```
~~~

This Extensions is a fork of Geek Learning's [Graphviz Markdown Preview](https://marketplace.visualstudio.com/items?itemName=geeklearningio.graphviz-markdown-preview).