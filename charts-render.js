function contentLoaded() {

  var chartElements = document.getElementsByClassName("chartjs");

  var changes = [];

  for (let index = 0; index < chartElements.length; index++) {
    var element = chartElements.item(index);
    var source = element.textContent;

    changes.push({
      placeholder: element.parentElement.parentElement,
      chart: element,
      source
    });


  }

  for (let index = 0; index < changes.length; index++) {
    const element = changes[index];
    element.placeholder.outerHTML = element.chart.outerHTML;
  }

  var newchartElements = document.getElementsByClassName("chartjs");

  for (let index = 0; index < newchartElements.length; index++) {
    var element = newchartElements.item(index);
    var source = element.textContent;
    new Chart(element.getContext("2d"), JSON.parse(source));
  }

}

window.addEventListener(
  "load",
  function () {
    contentLoaded();
  },
  false
);
