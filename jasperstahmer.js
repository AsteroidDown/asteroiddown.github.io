// ---------- Fade-in ---------- //
function fadeIn() {
  var header  = document.getElementById("header");
  var nav     = document.getElementById("nav");
  var prof    = document.getElementById("prof");
  var profr   = document.getElementById("prof-right");
  var workbr  = document.getElementById("work-break");
  var work    = document.getElementById("work");
  var volbr   = document.getElementById("vol-break");
  var vol     = document.getElementById("vol");
  var edubr   = document.getElementById("edu-break");
  var edu     = document.getElementById("edu");
  var gamebr  = document.getElementById("game-break");
  var game    = document.getElementById("game");
  var conbr   = document.getElementById("contact-break");
  var contact = document.getElementById("contact");


  header.classList.toggle("fade-in");
  nav.classList.toggle("fade-in");
  prof.classList.toggle("fade-in");
  profr.classList.toggle("fade-in");
  workbr.classList.toggle("fade-in");
  work.classList.toggle("fade-in");
  volbr.classList.toggle("fade-in");
  vol.classList.toggle("fade-in");
  edubr.classList.toggle("fade-in");
  edu.classList.toggle("fade-in");
  gamebr.classList.toggle("fade-in");
  game.classList.toggle("fade-in");
  conbr.classList.toggle("fade-in");
  contact.classList.toggle("fade-in");

}

// ---------- Accordians ---------- //
function accordian(accName, togName) {
  var panel = document.getElementById(accName);
  var tog = document.getElementById(togName);

  // Change panel max height
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

  // Toggle rotate class
  tog.classList.toggle("tog-rotate");
}


// ---------- Tabs ---------- //
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("work-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("work-tabbutton");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" selected", "");
  }

  document.getElementById(tabName).style.display = "block";
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

  var duration = 500;
  const cosParameter = (document.scrollingElement.scrollTop - pos) / 2;
  let scrollCount = 0, oldTimestamp = null;

  function step (newTimestamp) {
    if (oldTimestamp !== null) {
      scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
      if (scrollCount >= Math.PI) return element.scrollTop = pos;
      document.scrollingElement.scrollTop = pos + cosParameter + cosParameter * Math.cos(scrollCount);
    }
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}

function collapseAndJump(breakName) {

  // Get Nav panel
  var panel = document.getElementById("acc-nav");

  // Get selected break position from top
  var selectedBreak = document.getElementById(breakName);

  // Set Scroll position
  var pos = selectedBreak.offsetTop - panel.offsetHeight; 

  // Get page width to check if mobile sized
  var width = $(document).width();

  if (width < 850) {
    // Collapse Panel
    panel.style.transitionDuration = "0s";
    panel.style.maxHeight = null;
    panel.style.transitionDuration = "0.25s";

    // Add offset to
    pos -= 48;
  }

  // Scroll to position
  smoothScroll(pos);
}


// ---------- Image Functions ---------- //
function switchImage() {
  png = document.getElementById("Walter-png");
  gif = document.getElementById("Walter-gif");

  png.classList.toggle("hide");
  gif.classList.toggle("hide");
}

//document.getElementById("demo").innerHTML = x.className;




