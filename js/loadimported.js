function getset(name) {
  document.getElementById(name + '-container').innerHTML = document.getElementById(name).innerHTML;
}

function ready(){
  getset("navbar");
  getset("footer");
}

document.addEventListener("DOMContentLoaded", ready);
