console.log('hello from script.js');

function toggleStylesheet() { //TODO
  const styleEl = document.getElementById("style");
  if (styleEl.href.match("path-to-blossom.css")) {
    styleEl.href = "";
  }
  else {
    styleEl.href = "path-to-blossom.css";
  }
}