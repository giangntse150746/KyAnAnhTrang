
/* View Film Controller */
function viewFullFilm() {
    document.getElementById("iframeView").innerHTML = `
    <iframe width="960" height="540" id="iframeFilm"
      src="https://www.youtube.com/embed/AF9ubNnnEtg?start=001;rel=0&amp;loop=1" 
      title="Full Film" frameborder="1" 
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
      allowfullscreen>
    </iframe>
  `;
    document.getElementById("switchIframeButton").innerHTML = `
    <a>Xem Trailer</a>
  `;
    $('#switchIframeButton').click(function() {
        setTimeout(function() {
            window.location = 'film-view.html?view=trailer';
        }, 300);
    });
}

function viewTrailer() {
    document.getElementById("iframeView").innerHTML = `
    <iframe width="960" height="540" id="iframeTrailer"
        src="https://www.youtube.com/embed/llxrT4J2wZ4?start=001;rel=0&amp;loop=1" 
        title="Trailer Official" frameborder="" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
  `;
    document.getElementById("switchIframeButton").innerHTML = `
    <a>Xem Phim</a>
  `;
    $('#switchIframeButton').click(function() {
        setTimeout(function() {
            window.location = 'film-view.html?view=fullfilm';
        }, 300);
    });
}

function turnTheLightOff() {
  var lightContainer = document.getElementsByClassName("iframe-background")[0];
  lightContainer.setAttribute('style', "filter: brightness(0.4)");
  document.getElementsByClassName("background-light")[0].innerHTML = `
    <div id="btnLight" onclick="turnTheLightOn()">
      <i class="fa fa-eye-slash" aria-hidden="true"></i>
    </div>
  `;
  
}

function turnTheLightOn() {
  var lightContainer = document.getElementsByClassName("iframe-background")[0];
  lightContainer.setAttribute('style', "filter: brightness(1)");
  document.getElementsByClassName("background-light")[0].innerHTML = `
    <div id="btnLight" onclick="turnTheLightOff()">
      <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
    </div>
  `;
}