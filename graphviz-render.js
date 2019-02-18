function contentLoaded() {
  var chartElements = document.getElementsByClassName("chartjs");

  for (let index = 0; index < chartElements.length; index++) {
    var element = chartElements.item(index);
    var source = element.textContent;

    new Chart(element.getContext("2d"), source);
  }
  // use to debug rendered code.
  document.body.appendChild(document.createTextNode(document.body.innerHTML));
}

window.addEventListener(
  "load",
  function() {
    contentLoaded();
  },
  false
);
