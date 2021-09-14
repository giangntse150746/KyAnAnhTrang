function viewEkip() {
    document.getElementsByTagName('footer')[0].setAttribute("style", 'top: 6000px');
    document.getElementById("aboutUsContainer").innerHTML = `
    <div class="about-ekip" id="ekip">
        <div class="title light-up no-hover" id="ekipTitle">
            <a href="#">Về Ekip</a>
        </div>
        <div class="content" id="ekipContentWrapped">
            <div class="about-ekip-1" id="allMembers">
                <div class="text">
                    <h2>Về Ekip “Lưu Ly Sản Xuất Đội”</h2>
                    <div class="bruh-line"></div>
                    <p>
                      Lưu Ly Sản Xuất Đội là tập hợp của những sinh viên thuộc chuyên ngành Truyền thông Đa phương tiện 
                      đến từ Đại học FPT TP.HCM - những người trẻ đầy nhiệt huyết, chăm chỉ và luôn cống hiến hết mình. 
                      Dù là lần đầu làm phim, nhưng tất cả vẫn luôn cố gắng để cho ra một sản phẩm chỉn chu nhất. Hãy 
                      cùng điểm qua những gương mặt đã làm nên bộ phim trinh thám thú vị này nhé!
                    </p>
                </div>
                <div class="ekip-preview">
                    <div class="first-area">
                        <div class="popup" onmouseover="openPopUp(this)" onmouseout="closePopUp(this)" onclick="triggerReveal(this)">
                            <img id="ThanhThao" src="/source/about-us/ekip/individual/_mini-ThanhThao.png">
                            <span class="popup-text">
                              Thanh Thảo
                            </span>
                        </div>
                        <div class="popup" onmouseover="openPopUp(this)" onmouseout="closePopUp(this)" onclick="triggerReveal(this)">
                            <img id="DucBinh" src="/source/about-us/ekip/individual/_mini-DucBinh.png">
							<span class="popup-text">
                              Đức Bình
                            </span>
                        </div>
                        <div class="popup" onmouseover="openPopUp(this)" onmouseout="closePopUp(this)" onclick="triggerReveal(this)">
                            <img id="QuocPhong" src="/source/about-us/ekip/individual/_mini-QuocPhong.png">
							<span class="popup-text">
                              Quốc Phong
                            </span>
                        </div>
                    </div>
                    <div class="second-area">
                        <div class="popup" onmouseover="openPopUp(this)" onmouseout="closePopUp(this)" onclick="triggerReveal(this)">
                            <img id="Kaiken" src="/source/about-us/ekip/individual/_mini-Kaiken.png">
							<span class="popup-text">
                              Kaiken
                            </span>
                        </div>
                        <div class="popup" onmouseover="openPopUp(this)" onmouseout="closePopUp(this)" onclick="triggerReveal(this)">
                            <img id="ChanHung" src="/source/about-us/ekip/individual/_mini-ChanHung.png">
							<span class="popup-text">
                              Chấn Hưng
                            </span>
                        </div>
                        <div class="popup" onmouseover="openPopUp(this)" onmouseout="closePopUp(this)" onclick="triggerReveal(this)">
                            <img id="TanBean" src="/source/about-us/ekip/individual/_mini-TanBean.png">
							<span class="popup-text">
                              Tan Bean
                            </span>
                        </div>
                    </div>
                    <div class="third-area">
                        <div class="popup" onmouseover="openPopUp(this)" onmouseout="closePopUp(this)" onclick="triggerReveal(this)">
                            <img id="TuNgan" src="/source/about-us/ekip/individual/_mini-TuNgan.png">
							<span class="popup-text">
                              Tú Ngân
                            </span>
                        </div>
                        <div class="popup" onmouseover="openPopUp(this)" onmouseout="closePopUp(this)" onclick="triggerReveal(this)">
                            <img id="AnhKien" src="/source/about-us/ekip/individual/_mini-AnhKien.png">
							<span class="popup-text">
                              Anh Kiên
                            </span>
                        </div>
                        <div class="popup" onmouseover="openPopUp(this)" onmouseout="closePopUp(this)" onclick="triggerReveal(this)">
                            <img id="MinhBach" src="/source/about-us/ekip/individual/_mini-MinhBach.png">
							<span class="popup-text">
                              Minh Bách
                            </span>
                        </div>
                    </div>
                    <div class="fourth-area">
                        <div class="popup" onmouseover="openPopUp(this)" onmouseout="closePopUp(this)" onclick="triggerReveal(this)">
                            <img id="MinhPhuong" src="/source/about-us/ekip/individual/_mini-MinhPhuong.png">
							<span class="popup-text">
                              Minh Phương
                            </span>
                        </div>
                        <div class="popup" onmouseover="openPopUp(this)" onmouseout="closePopUp(this)" onclick="triggerReveal(this)">
                            <img id="loser" src="/source/about-us/ekip/individual/_mini-loser.png">
							<span class="popup-text">
                              Trường Giang
                            </span>
                        </div>
                        <div class="popup" onmouseover="openPopUp(this)" onmouseout="closePopUp(this)" onclick="triggerReveal(this)">
                            <img id="MinhPhuong" src="/source/about-us/ekip/individual/_mini-MinhPhuong.png" hidden>
							<span class="popup-text">
                              Minh Phương
                            </span>
                        </div>
                    </div>
                </div>
                <div class="ekip-reveal" id="ekipInfo">
				<div id="reveal-none" class="all side">
					<h1 class="display-1 upper-case">
						Hãy chọn 1 thành viên
					</h1>
					<p class="h3">
						chúng mình sẽ cho bạn biết người đó là mảnh ghép kì diệu nào 
						trong ekip của những con người làm nên điều diệu kì này...
					</p>
				</div>
                </div>
            </div>
            <div class="about-ekip-2" id="scriptWriterCrew">
                <div class="text">
                    <h2>Tổ Biên Kịch</h2>
                    <div class="bruh-line"></div>
                    <p>
						Hành trình bắt đầu từ ý tưởng. Tổ biên kịch chịu trách nhiệm xây 
						dựng nền móng đầu tiên cho bộ phim. 3 con người với 3 cá tính khác 
						nhau đã cùng hợp tác để sáng tạo nên một kỳ án thật độc đáo và đầy 
						ý nghĩa. Anh Kiên chính là ngòi bút lãng mạn nhất của câu chuyện, 
						ngược lại, phần già dặn, trưởng thành thuộc về văn phong của Minh Bách. 
						Cuối cùng, định hướng cho toàn bộ diễn biến và hài hoà mọi tình tiết là 
						nhiệm vụ của Minh Phương. Kỳ Án Ánh Trăng vì thế có phần sâu sắc, bí hiểm, 
						lại vừa giật gân, hóc búa nhưng cũng không kém phần dịu dàng, thơ mộng. 
						Đó chính là kết quả cuối cùng của 3 cá tính kịch bản này hợp thành.
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
						Để hiện thực hoá câu chữ lên màn ảnh rộng, tổ quay dựng với tập hợp 
						những cá nhân đầy năng lượng và nhiệt huyết đã làm nên một Kỳ Án Ánh 
						Trăng với những thước quay đầy chỉn chu và sáng tạo nhất. Đây cũng là 
						tổ đội đông bậc nhất dự án bởi nhiệm vụ này cần rất nhiều nhân lực và 
						cả sự nỗ lực không ngừng nghỉ nữa. Tất cả các bạn trẻ này đã không quản 
						mồ hôi, công sức để ghi hình, thu tiếng, hắt sáng, trong mọi điều kiện 
						thời tiết khắc nghiệt và mọi hoàn cảnh khó khăn. Sự thành công của Kỳ 
						Án Ánh Trăng hôm nay đã đánh đổi bằng rất nhiều đêm thức trắng biên tập 
						của các cậu này.  
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
                        thẩm mỹ trong ekip, cùng nhau dàn dựng nên những tông màu chân thực và 
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
        <div class="title light-up no-hover" id="projectTitle">
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
                        Vào ngày 02/04/2021 tại hội trường B Đại học FPT TP.HCM, sự kiện 
                        liên hoan phim MOVE WITH DRAMAS đã tạo điều kiện cho Phim ngắn: Kỳ 
                        Án Ánh Trăng lần đầu tiên được trình chiếu trên màn ảnh rộng. Giây phút 
                        chứng kiến sản phẩm của chính mình được đón nhận và yêu mến bởi 
                        đông đảo khán giả tại buổi công chiếu, đối với ekip mà nói, là một 
                        niềm hạnh phúc không bao giờ nguôi. Nắm giữ suất chiếu cuối cùng của 
                        sự kiện, Lưu Ly Sản Xuất Đội đã từng lo lắng rằng sẽ rất khó để níu 
                        chân các quý khán giả ở lại đến giờ phút đó để thưởng thức bộ phim 
                        trọn vẹn. Tuy nhiên, thực tế đã khiến chúng mình rất bất ngờ và 
                        hân hoan. Số lượng khán giả nán lại khán phòng vượt ngoài sức chứa, 
                        và đương nhiên, vượt ngoài sức tưởng tượng của ekip chúng mình. 
                        Ngoài ra, khoảnh khắc Lưu Ly Sản Xuất Đội được đứng trên sân khấu 
                        lắng nghe lời nhận xét của các vị giám khảo cũng như giao lưu với 
                        khán giả sự kiện cũng là một kỉ niệm đáng nhớ. Lưu Ly Sản Xuất Đội 
                        xin cảm ơn tất cả mọi người đã yêu quý và đến dự buổi công chiếu 
                        của chúng mình!
                    </p>
                </div>
                <div class="image">
                    <img src="/source/about-us/project/3.png">
                </div>
                <div class="extra-text">
                    <p>
                        “Các bạn đã sử dụng tối đa quỹ thời gian của mình để hoàn thành dự án. 
						Và mọi người ở đây đều phải công nhận rằng nó xứng đáng. Bộ phim chỉn 
						chu từng góc quay, từng chi tiết. Khiến thầy rất mãn nhãn và tương đối 
						vượt sự mong đợi của thầy. “ - <span>Thạc sĩ Huỳnh Phạm Ngọc Lâm</span>, 
						giảng viên ngành Truyền thông đa phương tiện - bộ môn Video Production. 
                    </p>
                    <p>
						“Xem Kỳ Án Ánh Trăng trong 50 phút, cảm xúc của cô thật sự rất khâm phục 
						các bạn. Từ yếu tố về dàn dựng, đến diễn viên, mọi thứ đều chu đáo và chỉn 
						chu, đó là sự đầu tư rất lớn của các bạn. Cả cô và khán giả đều có những câu 
						hỏi muốn dành cho các bạn, và cô nghĩ điều đó chứng tỏ các bạn rất thành công.
						” - <span>Cô Kiều Thị Thu Chung</span>, giảng viên bộ môn Kỹ năng mềm.
                    </p>
                    <p>
						“Thường cô chỉ khóc lúc sinh viên ra trường, nhưng những điều các bạn làm 
						khiến cô cảm nhận các bạn thực sự độc lập và vững vàng về chuyên môn. Và 
						hôm nay cô đã khóc, ở đây” - <span>Cô Hồ Yên Thục</span>, giảng viên bộ môn 
						Kỹ năng mềm.
                    </p>
                </div>
                <div class="image">
                    <img src="/source/about-us/project/4.jpg">
                </div>
                <div class="extra-text-1">
                    <p>
						Khán giả phim ngắn Kỳ Án Ánh Trăng hào hứng nhận quà on-site từ ekip. 
						Đó là những chiếc vé kỉ niệm thân thương của chúng mình dành tặng cho 
						mọi người.<br/>
						(Nguồn: MEC - Multimedia and Entertainment Club)
                    </p>
                </div>
                <div class="image">
                    <img src="/source/about-us/project/5.jpg">
                </div>
                <div class="extra-text-1">
                    <p>
                    	Tập thể lớp MC1501 chụp hình kỉ niệm sự kiện công chiếu. Ngoài Kỳ Án 
						Ánh Trăng, lớp chúng mình còn có 2 bộ phim xuất sắc khác lần lượt là 
						Bất Nhị và Lựa Chọn. Cùng đón xem nhé.<br/>
						(Nguồn: MEC - Multimedia and Entertainment Club)
                    </p>
                </div>
            </div>
            <div class="about-project-4">
                <div class="text">
                    <h2>SỰ KIỆN CÔNG CHIẾU TRỰC TUYẾN TRÊN YOUTUBE</h2>
                    <div class="bruh-line"></div>
                    <p>
                        Vào 20h00 ngày 02/05/2021, dành cho những mong chờ của quý khán giả 
                        thân yêu của Lưu Ly Sản Xuất Đội, phim ngắn Kỳ Án Ánh Trăng đã môt 
                        lần nữa quay trở lại màn ảnh với diện mạo mới thu hút hơn, hoàn thiện 
                        hơn so với bản công chiếu tại sự kiện MOVE WITH DRAMAS. Lần này, phim 
                        ngắn Kỳ Án Ánh Trăng hứa hẹn sẽ mang lại những tình tiết mới khiến 
                        cho câu chuyện xoay quanh lời nguyền ánh trăng bí ấn càng thêm hấp dẫn. 
                    </p>
                </div>
                <div class="image">
                  <img src="/source/about-us/project/6.jpg">
                </div>
            </div>
			<div class="cta-container">
				<a href="film-view.html?view=fullfilm">
					Xem Phim <i class="fa fa-arrow-right" aria-hidden="true"></i>
				</a>
        	</div>
        </div>
    </div>
  `;
}

const revealThanhThao = `
    <div class="left-side">
        <img src="/source/about-us/ekip/individual/ThanhThao.png" alt="reveal-ThanhThao">
    </div>
    <div class="right-side">
        <h2>
            Thanh Thảo
        </h2>
        <div class="bruh-line"></div>
        <p>
			Đảm nhiệm vai trò của một người quản lý tất cả: từ khâu tiền kỳ cho đến hậu kỳ. 
			Tất cả đều được Thảo quán xuyến rõ ràng và mạch lạc. Vai trò lớn cũng đồng nghĩa 
			với việc trách nhiệm lớn. Tuy vậy cô nàng vẫn có thể hoàn thành nhiệm vụ của mình. 
			Ngoài việc là một Project manager, Thảo còn là Producer và Media Leader của Kỳ Án 
			Ánh Trăng nữa đó.
        </p>
    </div>
`;

const revealDucBinh = `
    <div class="left-side">
        <img src="/source/about-us/ekip/individual/DucBinh.png" alt="reveal-DucBinh">
    </div>
    <div class="right-side">
        <h2>
            Đức Bình
        </h2>
        <div class="bruh-line"></div>
        <p>
			Nhiệt thành và năng nổ. Cảm xúc nhưng vẫn luôn lý trí để nắm rõ tình hình. 
			Director Đức Bình chính là chìa khóa quan trọng của Kỳ Án Ánh Trăng. Từng 
			shot quay, từng khung cảnh đều được anh chàng chỉ đạo diễn xuất một cách kỹ 
			càng, thậm chí đôi lúc không ngần ngại sáng tạo. Lần đầu trở thành một Director, 
			nhưng Bình đã không phụ lòng mọi người khi cố gắng hết sức có thể để làm tốt 
			vị trí của mình.
        </p>
    </div>
`;

const revealQuocPhong = `
    <div class="left-side">
        <img src="/source/about-us/ekip/individual/QuocPhong.png" alt="reveal-QuocPhong">
    </div>
    <div class="right-side">
        <h2>
            Quốc Phong
        </h2>
        <div class="bruh-line"></div>
        <p>
			Là con mắt của đạo diễn, cũng là người hỗ trợ hết mình để từng shot 
			phim hoàn thiện nhất. Phong đảm nhiệm một vai trò quan trọng khi phải 
			tập trung chú ý chất lượng hình ảnh, gam màu và concept videography. 
			Tuy khối lượng công việc là nhiều không đếm xuể, nhưng một DOP kiên 
			cường sẽ không bao giờ than vãn hay phàn nàn một câu nào. Đó là Quốc 
			Phong, một thành viên kiên trì rất được yêu mến của Lưu Ly Sản Xuất Đội.
        </p>
    </div>
`;

const revealKaiken = `
    <div class="left-side">
        <img src="/source/about-us/ekip/individual/Kaiken.png" alt="reveal-Kaiken">
    </div>
    <div class="right-side">
        <h2>
            Kaiken
        </h2>
        <div class="bruh-line"></div>
        <p>
			Là chân quay chính của tổ đội làm phim chúng mình. Kaiken tháo vát 
			cứ như vậy mà cầm lên những chiếc máy quay nặng trịch, tỉ mỉ cho 
			những lần quay kéo dài đến nhiều tiếng đồng hồ. Ngoài ra, Kaiken 
			cũng là Still photographer, và là người đồng hành cùng Quốc Phong 
			trong vai trò DOP cho dự án phim ngắn: Kỳ Án Ánh Trăng.
        </p>
    </div>
`;

const revealChanHung = `
    <div class="left-side">
        <img src="/source/about-us/ekip/individual/ChanHung.png" alt="reveal-ChanHung">
    </div>
    <div class="right-side">
        <h2>
            Chấn Hưng
        </h2>
        <div class="bruh-line"></div>
        <p>
			Một bộ phim hay thì không thể nào thiếu đi âm thanh tốt. Chấn Hưng 
			chính là người gánh vác lượng công việc đồ sộ: từ lồng tiếng, hiệu 
			ứng âm thanh cho đến từng tiếng gió, tiếng bước chân...Tất cả đều 
			từ một tay anh chàng này làm nên. Vậy nên có thể nói Hưng là thành 
			phần không thể thiếu của Lưu Ly Sản Xuất Đội. Ngoài ra, Hưng cũng là 
			Still photographer đắc lực cho cả đội.
        </p>
    </div>
`;

const revealTanBean = `
    <div class="left-side">
        <img src="/source/about-us/ekip/individual/TanBean.png" alt="reveal-TanBean">
    </div>
    <div class="right-side">
        <h2>
            Tan Bean
        </h2>
        <div class="bruh-line"></div>
        <p>
			Là Editor chính của dự án. Thành thạo về Adobe cũng như sở hữu khả năng 
			dựng phim được mọi người trong ekip công nhận. Kỳ Án Ánh Trăng cứ như 
			vậy dưới bàn tay của Bean đã trở thành một sản phẩm được nhiều người 
			kỳ vọng và chờ đợi bấy lâu nay. Ngoài ra, Bean còn góp phần công sức 
			không nhỏ khi hỗ trợ tất cả mọi người trong nhiều nhiệm vụ khác nhau.
        </p>
    </div>
`;

const revealTuNgan = `
    <div class="left-side">
        <img src="/source/about-us/ekip/individual/TuNgan.png" alt="reveal-TuNgan">
    </div>
    <div class="right-side">
        <h2>
            Tú Ngân
        </h2>
        <div class="bruh-line"></div>
        <p>
			Từ concept, màu sắc, cho đến ý tưởng thiết kế, bộ nhận diện của Kỳ Án Ánh Trăng 
			hôm nay: tất cả đều đến từ sự tư duy và sáng tạo của Tú Ngân. Thực sự cô nàng đã 
			thực hiện vai trò của mình trên cả tuyệt vời khi còn đảm nhiệm luôn cả vai trò 
			Production Designer, đồng thời hỗ trợ làm Graphic cho khâu truyền thông quan trọng 
			của bộ phim. Đa-zi-năng là tất cả những gì ekip có thể tưởng tượng về Tú Ngân.
        </p>
    </div>
`;

const revealAnhKien = `
    <div class="left-side">
        <img src="/source/about-us/ekip/individual/AnhKien.png" alt="reveal-AnhKien">
    </div>
    <div class="right-side">
        <h2>
            Anh Kiên
        </h2>
        <div class="bruh-line"></div>
        <p>
			Một trong ba cây bút đã tạo nên sự thành công cho bộ phim. Là người mang đến 
			nguồn cảm hứng, cũng như những phân cảnh và chi tiết lãng mạn trong Kỳ Án Ánh Trăng.
			Bên cạnh đó, Kiên cũng là người người khởi xướng những ý tưởng táo bạo,
			và chính cái tên "Lưu Ly Sản Xuất Đội" cũng từ đấy mà ra đời.
        </p>
    </div>
`;

const revealMinhBach = `
    <div class="left-side">
        <img src="/source/about-us/ekip/individual/MinhBach.png" alt="reveal-AnhKien">
    </div>
    <div class="right-side">
        <h2>
            Minh Bách
        </h2>
        <div class="bruh-line"></div>
        <p>
			Lời thoại là linh hồn của nhân vật, cũng là cách để một bộ phim truyền tải 
			tới người xem những gì mà nó hàm nghĩa. Từng là người viết truyện ngắn trong 
			một thời gian dài, Minh Bách đã thể hiện khả năng sáng tạo cùng tư duy thoại 
			sắc bén khi đã chắp bút nên những câu thoại mang đạm chất trinh thám điển hình.
			<br/>
			Anh cũng là người đóng vai trò quan trọng khi luôn hỗ trợ hết mình trong 
			khâu sản xuất, dàn dựng phim.		
		</p>
    </div>
`;

const revealMinhPhuong = `
    <div class="left-side">
        <img src="/source/about-us/ekip/individual/MinhPhuong.png" alt="reveal-AnhKien">
    </div>
    <div class="right-side">
        <h2>
            Minh Phương
        </h2>
        <div class="bruh-line"></div>
        <p>
			Kịch bản bắt đầu từ đâu...?<br/>
			Phương chính là ngọn nguồn của tất cả, tập hợp mọi người và nêu lên ý tưởng 
			ban đầu của phim ngắn: Kỳ Án Ánh Trăng. Là một biên kịch tham vọng và đầy tài 
			năng, Phương đã cùng mọi người hiện thực hóa ý tưởng về bộ phim ngắn đầu tay này. 
			Ngoài ra, Phương còn là một Production Designer- là người chuẩn bị, quan tâm từng 
			thứ nhỏ nhặt nhất cho bộ phim được hoàn thành một cách chỉn chu.
		</p>
    </div>
`;


const revealloser = `
    <div class="left-side">
        <img src="/source/about-us/ekip/individual/loser.png" alt="reveal-AnhKien">
    </div>
    <div class="right-side">
        <h2>
            Trường Giang
        </h2>
        <div class="bruh-line"></div>
        <p>
			Hỗ trợ Chấn Hưng và cùng mọi người chuẩn bị máy móc cho việc quay phim 
			chính là Trường Giang. Ngoài ra, Giang còn đảm nhiệm vai trò chính trong 
			việc sáng tác, phối khí để thể hiện OST chính của bộ phim. Làm nhạc cho 
			một phim ngắn không bao giờ là dễ, vậy mà Trường Giang đã làm được, và 
			còn làm xuất sắc hơn cả.
		</p>
    </div>
`;

function reveal(content) {
    document.getElementById('ekipInfo').innerHTML = content;
    //console.log(content);
}

function triggerReveal(previewContainer) {
    // get the id's value of the preview-image
    var previewValue = previewContainer.getElementsByTagName("img")[0].id;
    console.log(previewValue);
    switch (previewValue) {
        case "ThanhThao":
            reveal(revealThanhThao);
            break;
        case "DucBinh":
            reveal(revealDucBinh);
            break;
        case "QuocPhong":
            reveal(revealQuocPhong);
            break;
        case "Kaiken":
            reveal(revealKaiken);
            break;
        case "ChanHung":
            reveal(revealChanHung);
            break;
        case "TanBean":
            reveal(revealTanBean);
            break;
        case "TuNgan":
            reveal(revealTuNgan);
            break;
        case "AnhKien":
            reveal(revealAnhKien);
            break;
        case "MinhBach":
            reveal(revealMinhBach);
            break;
        case "MinhPhuong":
            reveal(revealMinhPhuong);
            break;
        case "loser":
            reveal(revealloser);
            break;
    }
}