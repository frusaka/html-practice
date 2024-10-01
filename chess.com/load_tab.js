function loadContent(number) {
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`tab${i}`).style.backgroundColor = "rgba(0,0,0,0)";
  }
  const colors = ["#008000", "#ffd900", "#3993e7", "#d73bf3", "#d3d3d3"];
  document.getElementById(`tab${number}`).style.backgroundColor = "rgba(0,0,0,.25)"//colors[number-1];
  fetch(`tabs/tab${number}.html`)
    .then(response => response.text())
    .then(data => {
      document.getElementById('app-main').innerHTML = data;
    })
    .catch(error => console.error('Error loading content:', error));
}
document.addEventListener('DOMContentLoaded', function loadHome() { return loadContent(4) })