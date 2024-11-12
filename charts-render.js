function contentLoaded() {
  const charts = [];
  Chart.defaults.animation.duration = 0;

  for (const canvas of document.querySelectorAll('canvas.chartjs')) {
    const p = canvas.parentElement.parentElement;
    if ('PRE' == p.tagName) {
      // replace <pre><code><canvas> with just <canvas>
      p.outerHTML = canvas.outerHTML;
    }
  }

  for (const canvas of document.querySelectorAll('canvas.chartjs')) {
    if ('initialized' == canvas.getAttribute('data-chartjs-status')) {
      continue;
    }

    canvas.setAttribute('data-chartjs-status', 'initialized');

    let json = {};

    try {
      json = JSON.parse(canvas.textContent);
    } catch (e) {
      // invalid json syntax!

      canvas.outerHTML = `<pre><code>${e}\n\n${canvas.textContent
        .split('\n')
        .map((value, index, _array) => {
          return index + 1 + ': ' + value;
        })
        .join('\n')}</code></pre>`;
    }

    const newChart = new Chart(canvas.getContext('2d'), json);
    charts.push(newChart);
  }
  return charts;
}

window.addEventListener('load', contentLoaded, false);
window.addEventListener(
  'message',
  (event) => {
    if ('updateContent' == event?.data?.type) {
      contentLoaded();
    }
  },
  false
);
