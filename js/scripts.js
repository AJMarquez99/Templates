function scrollNav() { //Remember to change so that it differentiates between mobile and desktop.
  var x = document.getElementById("main_nav")
  if (window.pageYOffset > 0) {
    x.className = "main-nav d-flex mobile-nav scroll-nav"
  } else {
    x.className = "main-nav d-flex mobile-nav"
  }
}

function retrieveStats(elementId) {
  if (typeof(elementId) == 'string') {
    let element = document.getElementById(elementId);
    let positionInfo = element.getBoundingClientRect();
    return positionInfo;
  }
}

function innerLeftScroll() {
  var divScroll = document.getElementById("ourTeamRow");
  if (window.innerWidth < 574 ) {
    divScroll.scrollTo(divScroll.scrollLeft - divScroll.scrollWidth/4, 0);
  } else if (window.innerWidth < 992) {
    divScroll.scrollTo(0, 0);
  }
}

function innerRightScroll() {
  var divScroll = document.getElementById("ourTeamRow");
  if (window.innerWidth < 574 ) {
    divScroll.scrollTo(divScroll.scrollLeft + divScroll.scrollWidth/4, 0);
  } else if (window.innerWidth < 992) {
    divScroll.scrollTo(retrieveStats('ourTeamRow').width, 0);
  }
}

window.onscroll = scrollNav;
document.getElementById("prev").addEventListener("click", innerLeftScroll);
document.getElementById("next").addEventListener("click", innerRightScroll);
