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
    }  else if (windowsize < 360) {
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
      window.onbeforeunload = function () {
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
    $('html, body').animate({scrollTop:0}, '300');
  });
  /*********/
  /* Scroll Controller */
  $(window).scroll(function(e) {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = (scrollTop) / (docHeight - winHeight);
    var scrollPercentRounded = Math.round(scrollPercent*100);

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
  setTimeout(function(){return;}, 5000);
}

/* View Film Controller */
function viewFullFilm() {
  document.getElementById("iframeView").innerHTML=`
    <iframe width="960" height="540" id="iframeFilm"
      src="https://www.youtube.com/embed/AF9ubNnnEtg?start=001;rel=0&amp;loop=1" 
      title="Full Film" frameborder="1" 
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
      allowfullscreen>
    </iframe>
  `;
  document.getElementById("switchIframeButton").innerHTML=`
    <a>Xem Trailer</a>
  `;
  $('#switchIframeButton').click(function() {
      setTimeout(function() {
        window.location = 'film-view.html?view=trailer';
      }, 300);
  });
}
function viewTrailer() {
  document.getElementById("iframeView").innerHTML=`
    <iframe width="960" height="540" id="iframeTrailer"
        src="https://www.youtube.com/embed/llxrT4J2wZ4?start=001;rel=0&amp;loop=1" 
        title="Trailer Official" frameborder="" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
  `;
  document.getElementById("switchIframeButton").innerHTML=`
    <a>Xem Phim</a>
  `;
  $('#switchIframeButton').click(function() {
      setTimeout(function() {
        window.location = 'film-view.html?view=fullfilm';
      }, 300);
  });
}

function viewEkip() {
  document.getElementsByTagName('footer')[0].setAttribute("style", 'top: 6000px');
  document.getElementById("aboutUsContainer").innerHTML = `
  <div class="about-ekip" id="ekip">
      <div class="title" id="ekipTitle">
          <a href="#">Về Ekip</a>
      </div>
      <div class="content" id="ekipContentWrapped">
          <div class="about-ekip-1" id="allMembers">
              <div class="text">
                  <h2>Về Ekip “Lưu Ly Sản Xuất Đội”</h2>
                  <div class="bruh-line"></div>
                  <p>
                  Lưu Ly Sản Xuất Đội là tập hợp của những sinh viên thuộc chuyên ngành Truyền thông Đa phương tiện đến từ Đại học FPT TP.HCM - những người trẻ đầy nhiệt huyết, chăm chỉ và luôn cống hiến hết mình. Dù là lần đầu làm phim, nhưng tất cả vẫn luôn cố gắng để cho ra một sản phẩm chỉn chu nhất. Hãy cùng điểm qua những gương mặt đã làm nên bộ phim trinh thám thú vị này nhé!
                  </p>
              </div>
              <div class="ekip-preview">
                  <div class="first-area">
                      <div>
                          <img src="/source/about-us/ekip/individual/ThanhThao.png">
                      </div>
                      <div>
                          <img src="/source/about-us/ekip/individual/DucBinh.png">
                      </div>
                      <div>
                          <img src="/source/about-us/ekip/individual/QuocPhong.png">
                      </div>
                  </div>
                  <div class="second-area">
                      <div>
                          <img src="/source/about-us/ekip/individual/HuongThanh.png">
                      </div>
                      <div>
                          <img src="/source/about-us/ekip/individual/ChanHung.png">
                      </div>
                      <div>
                          <img src="/source/about-us/ekip/individual/TanBean.png">
                      </div>
                  </div>
                  <div class="third-area">
                      <div>
                          <img src="/source/about-us/ekip/individual/TuNgan.png">
                      </div>
                      <div>
                          <img src="/source/about-us/ekip/individual/AnhKien.png">
                      </div>
                      <div>
                          <img src="/source/about-us/ekip/individual/MinhBach.png">
                      </div>
                  </div>
                  <div class="fourth-area">
                      <div>
                          <img src="/source/about-us/ekip/individual/MinhPhuong.png">
                      </div>
                      <div>
                          <img src="/source/about-us/ekip/individual/loser.png">
                      </div>
                  </div>
              </div>
              <div class="ekip-reveal">
                  Still nothing :V
              </div>
          </div>
          <div class="about-ekip-2" id="scriptWriterCrew">
              <div class="text">
                  <h2>Tổ Biên Kịch</h2>
                  <div class="bruh-line"></div>
                  <p>
                  Hành trình bắt đầu từ ý tưởng. Tổ biên kịch chịu trách nhiệm xây dựng nền móng đầu tiên cho bộ phim. 3 con người với 3 cá tính khác nhau đã cùng hợp tác để sáng tạo nên một kỳ án thật độc đáo và đầy ý nghĩa. Anh Kiên chính là ngòi bút lãng mạn nhất của câu chuyện, ngược lại, phần già dặn, trưởng thành thuộc về văn phong của Minh Bách. Cuối cùng, định hướng cho toàn bộ diễn biến và hài hoà mọi tình tiết là nhiệm vụ của Minh Phương. Kỳ Án Ánh Trăng vì thế có phần sâu sắc, bí hiểm, lại vừa giật gân, hóc búa nhưng cũng không kém phần dịu dàng, thơ mộng. Đó chính là kết quả cuối cùng của 3 cá tính kịch bản này hợp thành.
                  </p>
              </div>
              <div class="image">
                  <img src="/source/about-us/ekip/crew/ScriptWriter.png">
              </div>
          </div>
          <div class="about-ekip-3" id="filmMakingCrew">
              <div class="text">
                  <h2>Tổ Quay Dựng</h2>
                  <div class="bruh-line"></div>
                  <p>
                  Để hiện thực hoá câu chữ lên màn ảnh rộng, tổ quay dựng với tập hợp những cá nhân đầy năng lượng và nhiệt huyết đã làm nên một Kỳ Án Ánh Trăng với những thước quay đầy chỉn chu và sáng tạo nhất. Đây cũng là tổ đội đông bậc nhất dự án bởi nhiệm vụ này cần rất nhiều nhân lực và cả sự nỗ lực không ngừng nghỉ nữa. Tất cả các bạn trẻ này đã không quản mồ hôi, công sức để ghi hình, thu tiếng, hắt sáng, trong mọi điều kiện thời tiết khắc nghiệt và mọi hoàn cảnh khó khăn. Sự thành công của Kỳ Án Ánh Trăng hôm nay đã đánh đổi bằng rất nhiều đêm thức trắng biên tập của các cậu này.  
                  </p>
              </div>
              <div class="image">
                  <img src="/source/about-us/ekip/crew/filmMaking.png">
              </div>
          </div>
          <div class="about-ekip-4" id="artProductionDesignCrew">
              <div class="text">
                  <h2>Tổ Thiết Kế Sản Xuất Nghệ Thuật</h2>
                  <div class="bruh-line"></div>
                  <p>
                      Yếu tố mỹ thuật và bối cảnh là một điểm khác biệt và nổi bật của phim 
                      ngắn Kỳ Án Ánh Trăng nói riêng và dự án nói chung. Dưới sự dẫn dắt của 
                      Tú Ngân, tổ art và production design tụ hội những cá nhân có khả năng 
                      thẩm mỹ trong ekip, cùng nhau dàn dựng nên những tông màu chân thưc và 
                      riêng biệt nhất, tạo nên một Kỳ Án Ánh Trăng độc đáo và ấn tượng nhất. 
                      Chưa kể, để có được bối cảnh sát sao với thực tế, tổ đội này đã nghiên 
                      cứu kĩ lưỡng và chọn lựa những nguyên liệu thích hợp nhất để tạo nên một 
                      kí túc xá nữ thập niên 80-90, một căn phòng ghê rợn bí hiểm, và cả một 
                      không gian tâm trí tối tăm không tưởng...
                  </p>
              </div>
              <div class="image">
                  <img src="/source/about-us/ekip/crew/artProductionDesign.png">
              </div>
          </div>
          <div class="about-ekip-5" id="soundProductionDesignCrew">
              <div class="text">
                  <h2>Tổ Thiết Kế Sản Xuất Âm Thanh</h2>
                  <div class="bruh-line"></div>
                  <p>
                      Âm thanh và âm nhạc là quân cờ dẫn dắt cảm xúc của bộ phim đi đúng hướng 
                      chúng ta muốn kể. Chính vì thế, sự tài năng và nhạy bén của Chấn Hưng và 
                      Trường Giang là lựa chọn hoàn hảo nhất cho vị trí quan trọng này. Cả hai 
                      anh chàng này đều là những phù thuỷ âm thanh chất lượng của ekip. Tuy nhiên, 
                      trách nhiệm lớn thì khối lượng công việc càng lớn. Cùng với tổ quay dựng, 
                      Chấn Hưng và Trường Giang đã không quản công sức để hiệu chỉnh những yếu tố 
                      nhỏ một cách kĩ lưỡng, toàn tâm mong muốn bộ phim đạt được chất lượng tốt 
                      nhất trong khả năng của mình.
                      <span hidden>toi khong duoc lam cai toi muon va gioi nhat hmuhmu =.=</span>
                  </p>
              </div>
              <div class="image">
                  <img src="/source/about-us/ekip/crew/soundProductionDesign.png">
              </div>
          </div>
          <div class="about-ekip-6" id="mediaAndSeedingCrew">
              <div class="text">
                  <h2>Tổ Truyền Thông Chiến Lược</h2>
                  <div class="bruh-line"></div>
                  <p>
                      Nếu bạn đã đọc được đến đây, điều đó chứng tỏ tổ media chúng mình đã thành 
                      công một phần rồi đấy. Tập thể chúng mình đây là những người chịu trách 
                      nhiệm quảng bá, truyền thông bộ phim này đến với đông đảo khán giả của 
                      mình. Những giá trị mà Lưu Ly Sản Xuất Đội đem đến, đều được truyền tải 
                      qua từng câu chữ, từng tấm ảnh được tạo dựng chỉn chu trên các trang 
                      truyền thông của ekip. Với nguồn năng lượng tích cực, tổ media luôn nỗ 
                      lực đem đến cho quý khán giả những thông tin mới nhất về dự án, đồng 
                      thời duy trì cầu nối giữa tác phẩm điện ảnh này với những ai đã, đang 
                      và sẽ yêu quý nó.
                  </p>
              </div>
              <div class="image">
                  <img src="/source/about-us/ekip/crew/mediaAndSeeding.png">
              </div>
          </div>
      </div>
  </div>
  <div class="about-project" id="project">
      <div class="title">
          <a href="about-us.html?view=project">Về Dự Án</a>
      </div>
  </div>
  `;
}
function viewProject() {
  document.getElementsByTagName('footer')[0].setAttribute("style", 'top: 6400px');
  document.getElementById("aboutUsContainer").innerHTML = `
  <div class="about-ekip" id="ekip">
      <div class="title" id="ekipTitle">
          <a href="about-us.html?view=ekip">Về Ekip</a>
      </div>
  </div>
  <div class="about-project" id="project">
      <div class="title">
          <a href="#">Về Dự Án</a>
      </div>
      <div class="content" id="projectContentWrapped">
          <div class="about-project-1">
              <div class="text">
                  <h2>Bài Tập Môn Video Production</h2>
                  <div class="bruh-line"></div>
                  <p>
                      Phim ngắn “Kỳ Án Ánh Trăng” là sản phẩm của môn Sản xuất video 
                      nằm trong khuôn khổ chương trình học vào kì 4 của ngành Truyền 
                      thông Đa phương tiện tại Đại học FPT TP.HCM. Để hoàn thành tiêu 
                      chí của bộ môn, song, trải nghiệm trong môi trường sản xuất, ekip 
                      Lưu Ly Sản Xuất Đội đã lựa chọn thực hiện đề tài là một bộ phim ngắn 
                      với thời lượng khoảng 50 phút. Dự án này đã tạo cầu nối cho các bạn 
                      sinh viên tuy cùng lớp MC 1501 nhưng chưa một lần cùng làm việc với 
                      nhau trong một bài tập. Qua dự án này, Lưu Ly Sản Xuất Đội đã có 
                      những bước chân chập chững trong trải nghiệm làm phim, nhưng bản lĩnh 
                      của chúng mình vẫn luôn vững vàng dù dự án gặp vô vàn khó khăn trắc trở.
                  </p>
              </div>
              <div class="image">
                  <video controls loop>
                      <source src="/source/about-us/project/1.mp4">
                      Your browser does not support HTML video.
                  </video>
              </div>
          </div>
          <div class="about-project-2">
              <div class="text">
                  <h2>SẢN PHẨM ĐẦU TAY - PHIM NGẮN KỲ ÁN ÁNH TRĂNG</h2>
                  <div class="bruh-line"></div>
                  <p>
                      Dưới đây là poster chính thức của Phim ngắn: Kỳ Án Ánh Trăng - Visual 
                      đại diện cho bộ phim đầu tay của Lưu Ly Sản Xuất Đội. Đây là thành 
                      quả của 10 tuần thực hiện dự án. Thông qua poster phim, ekip chúng 
                      mình muốn truyền tải những ấn tượng đầu tiên về mặt hình ảnh của sản 
                      phẩm, đồng thời thu hút sự tò mò của khán giả về 2 gương mặt chính 
                      của bộ phim - cô sinh viên khoa giải phẫu Huyên Linh và anh thám tử 
                      điềm đạm Trần Đông. 

                      Bộ phim được công chiếu ở 2 thời điểm: Lần đầu công chiếu trực tiếp 
                      tại liên hoan phim MOVE WITH DRAMAS của ngành Truyền thông đa phương 
                      tiện Đại học FPT TP.HCM vào ngày 02/04/2021. Sau đó, phim sẽ được công 
                      chiếu trực tuyến tại nền tảng Youtube tại kênh phimngankyananhtrang 
                      lúc 20h00 ngày 02/05/2021.
                  </p>
              </div>
              <div class="image">
                  <img src="/source/about-us/project/2.jpg">
              </div>
          </div>
          <div class="about-project-3">
              <div class="text">
                  <h2>SỰ KIỆN CÔNG CHIẾU PHIM MOVE WITH DRAMAS</h2>
                  <div class="bruh-line"></div>
                  <p>
                      Vào ngày 02/04/2021, tại hội trường B Đại học FPT TP.HCM, Sự kiện 
                      liên hoan phim MOVE WITH DRAMAS đã tạo điều kiện cho Phim ngắn Kỳ 
                      Án Ánh Trăng lần đầu được trình chiếu trên màn ảnh rộng. Giây phút 
                      được chứng kiến sản phẩm của chính mình được đón nhận và yêu mến bởi 
                      đông đảo khán giả tại buổi công chiếu, đối với ekip mà nói, là một 
                      niềm hạnh phúc không bao giờ quên. Nắm giữ suất chiếu cuối cùng của 
                      sự kiện, Lưu Ly Sản Xuất Đội đã từng lo lắng rằng sẽ rất khó khăn để 
                      níu chân các quý khán giả ở lại đến giờ phút đó để thưởng thức bộ phim 
                      trọn vẹn. Tuy nhiên, thực tế đã khiến chúng mình rất bất ngờ và 
                      hân hoan. Số lượng khán giả nán lại khán phòng vượt ngoài sức chứa, 
                      và đương nhiên, vượt ngoài sức tưởng tượng của ekip chúng mình. 
                      Ngoài ra, khoảnh khắc Lưu Ly Sản Xuất Đoàn được đứng trên sân khấu 
                      lắng nghe lời nhận xét của các vị giám khảo cũng như giao lưu với 
                      khán giả sự kiện cũng là một kỉ niệm đáng nhớ. Lưu Ly Sản Xuất Đoàn 
                      xin cảm ơn tất cả mọi người đã yêu quý và đến dự buổi công chiếu 
                      của chúng mình!
                  </p>
              </div>
              <div class="image">
                  <img src="/source/about-us/project/3.png">
              </div>
              <div class="extra-text">
                  <p>
                  “Các bạn đã sử dụng tối đa quỹ thời gian của mình để hoàn thành dự án. Và mọi người ở đây đều phải công nhận rằng nó xứng đáng. Bộ phim chỉn chu từng góc quay, từng chi tiết. Khiến thầy rất mãn nhãn và tương đối vượt sự mong đợi của thầy. “ - <span>Thạc sĩ Huỳnh Phạm Ngọc Lâm</span>, giảng viên ngành Truyền thông đa phương tiện - bộ môn Video Production. 
                  </p>
                  <p>
                  “Xem Kỳ Án Ánh Trăng trong 50 phút, cảm xúc của cô thật sự rất khâm phục các bạn. Từ yếu tố về dàn dựng, đến diễn viên, mọi thứ đều chu đáo và chỉn chu, đó là sự đầu tư rất lớn của các bạn. Cả cô và khán giả đều có những câu hỏi muốn dành cho các bạn, và cô nghĩ điều đó chứng tỏ các bạn rất thành công.” - <span>Cô Kiều Thị Thu Chung</span>, giảng viên bộ môn Kỹ năng mềm.
                  </p>
                  <p>
                  “Thường cô chỉ khóc lúc sinh viên ra trường, nhưng những điều các bạn làm khiến cô cảm nhận các bạn thực sự độc lập và vững vàng về chuyên môn. Và hôm nay cô đã khóc, ở đây” - <span>Cô Hồ Yên Thục</span>, giảng viên bộ môn Kỹ năng mềm.
                  </p>
              </div>
              <div class="image">
                  <img src="/source/about-us/project/4.jpg">
              </div>
              <div class="extra-text-1">
                  <p>
                  Khán giả phim ngắn Kỳ Án Ánh Trăng hào hứng nhận quà on-site từ ekip. Đó là những chiếc vé kỉ niệm thân thương của chúng mình dành tặng cho mọi người. (Nguồn: MEC - Multimedia and Entertainment Club)
                  </p>
              </div>
              <div class="image">
                  <img src="/source/about-us/project/5.jpg">
              </div>
              <div class="extra-text-1">
                  <p>
                  Khán giả phim ngắn Kỳ Án Ánh Trăng hào hứng nhận quà on-site từ ekip. Đó là những chiếc vé kỉ niệm thân thương của chúng mình dành tặng cho mọi người. (Nguồn: MEC - Multimedia and Entertainment Club)
                  </p>
              </div>
          </div>
          <div class="about-project-4">
              <div class="text">
                  <h2>SỰ KIỆN CÔNG CHIẾU TRỰC TUYẾN TRÊN YOUTUBE</h2>
                  <div class="bruh-line"></div>
                  <p>
                      Vào 20h00 ngày 02/05/2021, dành cho những mong chờ của quý khán giả 
                      thân yêu của Lưu Ly Sản Xuất Đội, phim ngắn Kỳ Án Ánh Trăng sẽ môt 
                      lần nữa quay trở lại màn ảnh với diện mạo mới thu hút hơn, chỉn chu 
                      hơn so với bản công chiếu tại sự kiện MOVE WITH DRAMAS. Lần này, phim 
                      ngắn Kỳ Án Ánh Trăng hứa hẹn sẽ mang lại những tình tiết mới khiến 
                      cho câu chuyện xoay quanh lời nguyền ánh trăng bí ấn càng thêm hấp dẫn. 
                  </p>
              </div>
              <div class="image">
                <img src="/source/about-us/project/6.jpg">
              </div>
              
          </div>
      </div>
  </div>
  `;
}

function viewCurse() {
  document.getElementById("aboutMovieContainer").innerHTML = `
  <div class="about-curse" id="curse">
    <div class="title">
        <a href="#">Lời Nguyền Ánh Trăng</a>
    </div>
    <div class="content" id="curseContentWrapped">
        <div class="about-curse-1">
            <div class="text">
                <h2>“KỲ ÁN ÁNH TRĂNG” - Lời nguyền đêm rằm ma quái</h2>
                <div class="bruh-line"></div>
                <p>
                Sinh viên Đại học Y thành phố K truyền tai nhau rằng: Hễ cứ đến ngày rằm tháng 5, sẽ có một nữ sinh viên nhảy lầu tự tử tại phòng 105. Chưa hết, lúc đó sẽ vang lên nhạc khúc Moonlight Sonata quỷ quyệt. Và cứ như thế, đêm rằm tháng 5 hàng năm, không biết tự lúc nào, kí túc xá nữ Đại học Y luôn thấp thỏm lo sợ. Liệu lời nguyền đêm nay sẽ thuộc về cô gái xấu số nào? 
                </p>
            </div>
            <div class="image">
                <img src="source/about-movie/curse.jpg">
            </div>
        </div>
    </div>
  </div>
  <div class="about-meet" id="project">
      <div class="title">
          <a href="about-movie.html?view=meet">Cuộc gặp gỡ định mệnh</a>
      </div>
  </div>
  <div class="about-real" id="project">
      <div class="title">
          <a href="about-movie.html?view=real">Chân tướng sự thật</a>
      </div>
  </div>
  `;
}

function viewMeet() {
  document.getElementById("aboutMovieContainer").innerHTML = `
  <div class="about-curse" id="curse">
    <div class="title">
        <a href="about-movie.html?view=curse">Lời Nguyền Ánh Trăng</a>
    </div>
  </div>
  <div class="about-meet" id="project">
      <div class="title">
          <a href="#">Cuộc gặp gỡ định mệnh</a>
      </div>
      <div class="content" id="curseContentWrapped">
        <div class="about-curse-1">
            <div class="text">
                <h2>“KỲ ÁN ÁNH TRĂNG” - Những kẻ lập dị</h2>
                <div class="bruh-line"></div>
                <p>
                “Người ta thường nói: Những người lập dị thường hay thu hút những kẻ lập dị khác. Và trường hợp đó đúng cho cả hai ta, nhỉ?”. Trích lời chào hỏi của vị thám tử Trần Đông dành cho lần gặp gỡ đầu tiên với Huyên Linh - nhân vật chính. Cuộc gặp gỡ định mệnh ấy diễn ra vào đầu tháng 5 âm lịch, khi lời nguyền cận kề và cũng là lúc cặp đôi này quyết định lên đường tìm kiếm sự thật. Nhưng liệu phải chăng một mối quan hệ chóng vánh sẽ dễ đánh mất lòng tin? Một trong hai đã phát giác được dấu hiệu của kẻ phản bội! 
                </p>
            </div>
            <div class="image">
                <img src="source/about-movie/meet.jpg">
            </div>
        </div>
    </div>
  </div>
  <div class="about-real" id="project">
      <div class="title">
          <a href="about-movie.html?view=real">Chân tướng sự thật</a>
      </div>
  </div>
  `;
}

function viewReal() {
  document.getElementById("aboutMovieContainer").innerHTML = `
  <div class="about-curse" id="curse">
    <div class="title">
        <a href="about-movie.html?view=curse">Lời Nguyền Ánh Trăng</a>
    </div>
  </div>
  <div class="about-meet" id="project">
      <div class="title">
          <a href="about-movie.html?view=meet">Cuộc gặp gỡ định mệnh</a>
      </div>
  </div>
  <div class="about-real" id="project">
      <div class="title">
          <a href="#">Chân tướng sự thật</a>
      </div>
      <div class="content" id="curseContentWrapped">
        <div class="about-curse-1">
            <div class="text">
                <h2>“KỲ ÁN ÁNH TRĂNG” - Chương Presto Agitato</h2>
                <div class="bruh-line"></div>
                <p>
                Đã một tuần trôi qua kể từ khi Huyên Linh đặt chân đến KTX Đại học Y thành phố K để tìm kiếm sự thật. Đêm mai nữa thôi, lời nguyền sẽ lấy mạng người con gái đó - người mà cô hết mực trân quý. Hành trình tiệm cận câu trả lời đã đến hồi gay cấn. Từng manh mối và dấu vết ngày càng hiện rõ, chẳng mấy chốc, chương cuối của Moonlight Sonata sẽ vén màn!
                Liệu khao khát vén màn sự thật của Huyên Linh có thể đặt dấu chấm hết cho chương Presto Agitato này?
                </p>
            </div>
            <div class="image">
                <img src="source/about-movie/real.jpg">
            </div>
        </div>
    </div>
  </div>
  `;
}

function landingShowMore() {
  document.getElementById("landingShowContent").innerHTML = `
    <p>
        Nội dung chính của phim xoay quanh Huyên Linh- một cô gái
      mẫn tuệ, có khả năng quan sát và suy luận sắc bén.
    </p>
    <p>
        Liệu những bí ẩn quanh căn phòng 105, bản sonata ánh trăng
      rợn người và những cái chết kỳ bí của các cô gái trẻ hằng năm
      sẽ có lời giải đáp? Liệu Huyên Linh có tìm thấy công lý cho
      bản thân và cho cả những người mà cô yêu thương? Tất cả phải
      chăng sẽ theo đúng như những gì cô mong muốn?
    </p>
    <a id="showLess" onclick="landingShowLess()">Ẩn bớt <i class="fa fa-toggle-down"></i></a>
  `;
}
function landingShowLess() {
  document.getElementById("landingShowContent").innerHTML = `
    <a id="showMore" onclick="landingShowMore()">Xem thêm <i class="fa fa-toggle-down"></i></a>
  `;
}
