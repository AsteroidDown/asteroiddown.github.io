// ---------- Accordians ---------- //
function navAccordian() {
  var panel = document.getElementById("nav-links");

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

function skillsAccordian() {
  var acc = document.getElementById("acc-skill");
  var panel = acc.nextElementSibling;

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}


// ---------- Scroll Functions ---------- //
window.onscroll = function() {nameDisappear()};

function nameDisappear() {
  var x = document.getElementById("nav-name");
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    x.className = "nav-name-show";
  } else {
    x.className = "nav-name-hide";
  }
}

function smoothScroll(pos) {
	document.getElementById("demo").innerHTML = document.documentElement.scrollTop;
	window.scrollTo(0, pos);
}

function collapseAndJump(pos) {
  navCollapse();
  smoothScroll(pos);
}

//document.getElementById("demo").innerHTML = x.className;




