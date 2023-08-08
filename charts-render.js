// const log = s => {
//   const p = document.createElement('p');
//   p.innerText = s;
//   document.body.appendChild(p);
// };

function contentLoaded() {
  for (const canvas of document.querySelectorAll("canvas.chartjs")) {
    const p = canvas.parentElement.parentElement;
    if ('PRE' == p.tagName) {
      // replace <pre><code><canvas> with just <canvas>
      p.outerHTML = canvas.outerHTML;
    }
  }

  for (const canvas of document.querySelectorAll("canvas.chartjs")) {
    if ('initialized' == canvas.getAttribute('data-chartjs-status')) {
      continue;
    }

    canvas.setAttribute('data-chartjs-status', 'initialized');

    try {
      const json = JSON.parse(canvas.textContent);
      new Chart(canvas.getContext("2d"), json);
    }
    catch (e) {
      // invalid json syntax!
      canvas.outerHTML = `<pre><code>${e}</code></pre>`;
    }
  }
}

window.addEventListener("load", contentLoaded, false);
window.addEventListener("message", (event) => {
  if ('updateContent' == event?.data?.type) {
    contentLoaded();
  }
}, false);