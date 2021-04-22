// Set the date we're counting down to
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

$(document).ready(function() {

  $(window).scroll(function(e){
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = (scrollTop) / (docHeight - winHeight);
    var scrollPercentRounded = Math.round(scrollPercent*100);

      $('#scrollPercentLabel>span').html(scrollPercentRounded);
      if (scrollPercentRounded >= 1) {
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
      //repositionLabel();
  });
  /*
  $(window).resize(function(){
    repositionLabel();
  });

  function repositionLabel() {
    $('#scrollPercentLabel').css({
      position:'fixed',
      left: ($(window).width() - $('#scrollPercentLabel').outerWidth()) / 2,
      top: (($(window).height() - $('#scrollPercentLabel').outerHeight()) / 2) - $('#scrollPercentLabel').height()
    });
  }

  repositionLabel();
  */
});
