/* Alerts Controller */
function onLoadAlert(){
  swal({
    title: "Warning",
    text: "",
    icon: "failed",
    button: "OK",
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
  
  if (windowsize <= 540) {
    if (windowsize < 320) {
      openBruh();
    } else if (windowsize < 360) {
      openChangePhone();
    } else {
      closeBruh();
      switchToMenu();
    }
  } else if (windowsize <= 720) {
    switchToMenu();
  } else {
    switchToLink();
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
  document.getElementById("bruh").innerHTML=`
        <p>
          Ngưng thu nhỏ cái màn hình lại giúp tui.<br/>
          Trò này hong có vui đâu!!!
        </p>
  `;
  document.getElementById("bruh").style.width = "100%";
}
function closeBruh() {
  document.getElementById("bruh").style.width = "0%";
}

/* Navigation changePhone Controller */
function openChangePhone() {
  swal({
    title: "Cảnh báo",
    text: `Thiết bị của bạn có kích thước quá nhỏ
            Hãy sử dụng một màn hình lớn hơn để có trải nghiệm tốt nhất`,
    button: "OK",
    closeOnEsc: false,
    timer: 10000
  });
}

/* Switch headerBar */
function switchToMenu() {
  document.getElementById("headerLink").style.visibility = "hidden";
  document.getElementById("headerMenu").style = `
        visibility: visible;
        width: 70px;
        height: 70px;
  `;
}
function switchToLink() {
  document.getElementById("headerLink").style.visibility = "visible";
  document.getElementById("headerMenu").style = `
        visibility: hidden;
        width: 0;
        height: 0;
  `;
}