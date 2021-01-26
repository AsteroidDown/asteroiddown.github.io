
// ---------- Navbar Accordian/Collapse ---------- //
function navAccordian() {
  var x = document.getElementById("nav-right");
  if (x.className === "nav-right" || x.className === "nav-right closed") {
    x.className = "nav-right open";
  } else {
    x.className = "nav-right closed";
  }
}
function navCollapse() {
  var x = document.getElementById("nav-right");
  x.className = "nav-right";
}

function collapseAndJump(pos) {
	navCollapse();
	smoothScroll(pos);
}

// ---------- Coding Accordian ---------- //
function profAccordian() {
  var x = document.getElementById("prof-accordian");
  if (x.className === "prof-right") {
    x.className += " accordian";
  } else {
    x.className = "prof-right";
  }
}

// ---------- Accordians ---------- //
function accordian() {
  var acc = document.getElementById("acc-skill");
  // var tog = document.getElementById("tog-skill");

  // acc.classList.toggle("on");
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

//document.getElementById("demo").innerHTML = x.className;




