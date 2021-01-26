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


// ---------- Tabs ---------- //
function openTab(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("work-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("work-tabbutton");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" selected", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " selected";
}


// ---------- Scroll Functions ---------- //
window.onscroll = function() {nameDisappear()};

function nameDisappear() {
  var x = document.getElementById("nav-name");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
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
  var panel = document.getElementById("nav-links");
  panel.style.transitionDuration = "0s";
  panel.style.maxHeight = null;
  smoothScroll(pos);
  panel.style.transitionDuration = "0.25s";
}

//document.getElementById("demo").innerHTML = x.className;




