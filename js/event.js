/* Alerts Controller */
function onLoadAlert() {
    swal({
        title: "Warning",
        text: "",
        icon: "failed",
        button: "OK",
    });
}

/************************************************************** */
/*
// Set Counting-down Date
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
*/
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
        if (windowsize < 280) {
            closeSwal();
            openBruh();
        } else if (windowsize < 360) {
            openChangePhone();
            closeBruh();
        } else {
            closeSwal();
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
        window.onbeforeunload = function() {
            window.scrollTo(0, 0);
        }
    }
    /*********/

    /* Customize Wheel's Range */
    //  $('html, body').mousewheel(function(e, delta) {
    //    this.scrollTop -= (delta*840);
    //    e.preventDefault();
    //  });
    /*********/

    /* close Loader after loaded */
    setTimeout(fadeOutLoader, 0);
    setTimeout(closeLoader, 1000);
    /*********/
    /* Scroll Top */
    var upToTop = $('#topButton');

    upToTop.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
    /*********/
    /* Scroll Controller */
    $(window).scroll(function(e) {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = (scrollTop) / (docHeight - winHeight);
        var scrollPercentRounded = Math.round(scrollPercent * 100);

        $('#scrollPercentLabel>span').html(scrollPercentRounded);
        if (scrollPercentRounded > 0) {
            var scroller = document.getElementById("headerBar");
            scroller.setAttribute("style",
                `margin: 0 0 0 0;
           width: 100%;
           border-radius: 0;
           transition: .5s ease;
           filter: drop-shadow(0 10px 20px rgb(0, 0, 0, 0.75));
          `);
            upToTop.addClass('show');
        } else {
            var scroller = document.getElementById("headerBar");
            scroller.setAttribute("style",
                `margin: 100px 0 0 0; 
           transition: .5s ease;
           width: 80%;
           filter: drop-shadow(0 5px 10px rgb(0, 0, 0, 0.67));
          `);
            upToTop.removeClass('show');
        }
    });

    /* Background song controls */
    document.getElementById("bgAudio").volume = 0.3;
});

/************************************************************** */

/* Loader Controller */
function closeLoader() {
    var loader = document.getElementById("loader-container");
    loader.setAttribute("style", `visibility: hidden`);
}

function fadeOutLoader() {
    var loaderBar = document.getElementById("loaderBar");
    loaderBar.setAttribute("style", `filter: opacity(0%); transition: .8s ease;`);
}

/* Navigation Menu Controller */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/* Navigation Bruh Controller */
function openBruh() {
    document.getElementById("bruh").innerHTML = `
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
function openNoSupport() {
    swal({
        title: "Cảnh báo",
        text: `Thiết bị này không được hỗ trợ để duyệt trang web này`,
        button: "OK",
        closeOnEsc: false,
        timer: 5000
    });
}

function openChangePhone() {
    swal({
        title: "Cảnh báo",
        text: `Thiết bị của bạn có kích thước quá nhỏ
            Hãy sử dụng một màn hình lớn hơn để có trải nghiệm tốt nhất`,
        button: "OK",
        closeOnEsc: false,
        timer: 5000
    });
}

function closeSwal() {
    swal.close();
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

/* Back and Home Controller */
function previousPage() {
    window.history.back();
}

function goToHomepage() {
    setTimeout(function() {
        window.location = "/";
    }, 300);
}

/* Alert||Log Area */
function printCurrentLocation() {
    alert('Current location is: ' + window.location.href);
}

/* Location Controller */
function getCurrentLocation() {
    return new String(window.location.href);
}

function getParameters(str) {
    var url = str.split("?");
    var params = url[1].split("&");
    return params;
}

/* On Hover Controller */
function openPopUp(popContainer) {
    var popup = popContainer.getElementsByTagName("span");
    popup[0].classList.remove("hide");
    popup[0].classList.add("show");
}

function closePopUp(popContainer) {
    var popup = popContainer.getElementsByTagName("span");
    popup[0].classList.remove("show");
    popup[0].classList.add("hide");
}

/* On Click Controller */
function delayClick() {
    setTimeout(function() { return; }, 5000);
}

function muteAudio() {
    var state = document.getElementById("bgAudio").muted;
    if (state === true) {
        document.getElementById("btnMute").innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
        document.getElementById("bgAudio").muted = false;
    }
    else {
        document.getElementById("btnMute").innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
        document.getElementById("bgAudio").muted = true;
    }
}