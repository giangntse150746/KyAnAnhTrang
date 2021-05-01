/* Alerts Controller */
function onLoadAlert(){
  swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    button: "Aww yiss!",
  });
}

/************************************************************** */

/* Set Counting-down Date */
var countDownDate = new Date("May 2, 2021 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
      
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
      
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
  // Output the result in an element with id="demo"
  document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
      
  // If the count down is over, write some text 
  if (distance < 0) {
    //TO DO AREA
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}, 1000);

/************************************************************** */

/* Get Windows Size */
var windowsize = $(window).width();

changeHeaderBar();

$(window).resize(function() {
  windowsize = $(window).width();
  changeHeaderBar();
});

function changeHeaderBar() {
  var link = document.getElementById("headerLink");
  var menu = document.getElementById("headerMenu");
  //var trailer = document.getElementById("backgroundTrailer");
  if (windowsize < 360) {
    openBruh();
  } else if (windowsize <= 720) {
    closeBruh();
    link.setAttribute("style", `
        visibility: hidden;
    `);
    menu.setAttribute("style", `
        visibility: visible;
        width: 70px;
        height: 70px;
    `);
  } else {
    closeBruh();
    menu.setAttribute("style", `
        visibility: hidden;
        width: 0;
        height: 0;
    `);
    link.setAttribute("style", `
        visibility: visible;
    `);
    closeNav();
  }
}

/************************************************************** */

$(document).on('touchmove', function(e) {
  e.preventDefault();
});

/************************************************************** */

/* After Ready Events */
$(document).ready(function() {

  if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
  } else {
      window.onbeforeunload = function () {
          window.scrollTo(0, 0);
      }
  }
  /*********/

  /* Loader Controller */
  setTimeout(fadeOutLoader, 0);
  setTimeout(closeLoader, 1000);

  function closeLoader() {
    var loader = document.getElementById("loader-container");
    loader.setAttribute("style", `z-index: -1;`);
  }
  function fadeOutLoader() {
    var loaderBar = document.getElementById("loaderBar");
    loaderBar.setAttribute("style", `filter: opacity(0%); transition: .8s ease;`);
  }
  /*********/

  /* Scroll Controller */
  $(window).scroll(function(e){
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = (scrollTop) / (docHeight - winHeight);
    var scrollPercentRounded = Math.round(scrollPercent*100);

      $('#scrollPercentLabel>span').html(scrollPercentRounded);
      if (scrollPercent > 0) {
        var scroller = document.getElementById("headerBar");
        scroller.setAttribute("style", 
          `margin: 0 0 0 0;
           width: 100%;
           border-radius: 0;
           transition: .5s ease;
          `);
      } else {
        var scroller = document.getElementById("headerBar");
        scroller.setAttribute("style", 
          `margin: 100px 0 0 0; 
           transition: .5s ease;
           width: 80%;
          `);
      }
  });
  /*********/
});

/************************************************************** */

/* Navigation Menu Controller */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/* Navigation Bruh Controller */
function openBruh() {
  document.getElementById("bruh").style.width = "100%";
}

function closeBruh() {
  document.getElementById("bruh").style.width = "0%";
}