function getset(name) {
  document.getElementById(name + '-container').innerHTML = document.getElementById(name).innerHTML;
}

function ready(){
  getset("navbar");
  getset("footer");
}

if (document.readyState === "complete" || document.readyState === "loaded") {
    ready();
} else {
    $(document).ready(ready);
}
