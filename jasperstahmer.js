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
    pos -= 45;
  }

  // Scroll to position
  smoothScroll(pos);
}

//document.getElementById("demo").innerHTML = x.className;




