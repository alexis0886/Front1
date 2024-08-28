document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const catImage = document.getElementById('cat-image');
    const logo = document.getElementById('logo');
    const menu = document.getElementById('menu-button');
    const btnContainer = document.getElementById('btn-container');
    const buttons = document.querySelectorAll('.btn');
    const mtContainer = document.getElementById('main_text-container')
    const stContainer = document.getElementById('sub_text-container')
    const subtexts = document.querySelectorAll('.sub_text');
    const subtext2 = document.querySelector('.sub_text2');
    const subtext3 = document.querySelector('.sub_text3');
    const subtext4 = document.querySelector('.sub_text4');
    const maintext = document.querySelector('.main_text');
    const maintext3 = document.querySelector('.main_text3');
    const maintext4 = document.querySelector('.main_text4');
    const maintext5 = document.querySelector('.main_text5');
    const img4 = document.getElementById('img4');
    const maintext2 = document.querySelector('.main_text2');
    const mtContainer2 = document.getElementById('main_text-container2')
    const stContainer2 = document.getElementById('sub_text-container2')
    const mtContainer3 = document.getElementById('main_text-container3')
    const stContainer3 = document.getElementById('sub_text-container3')
    const imgcontainer = document.getElementById('image_container');
    const images = document.querySelectorAll('#image_container img');
    const moreContainer = document.getElementById('more-container')
    const morebtn = document.querySelector('.morebtn');
    const midtext = document.querySelector('.mid_text');
    const border = document.getElementById('border');
    const maptextContainer = document.getElementById('map_text-container')
    const submapContainer = document.getElementById('sub_map_text-container')
    const mapContainer = document.getElementById('map-container')
    const map = document.getElementById('map')
    const img8 = document.getElementById('img8');
    const logo2 = document.getElementById('logo2');
    const footer = document.getElementById('footer');
    const footerIcon = document.getElementById('footer-icon');
    const footerMenu = document.getElementById('footer-menu');
    const subscribeContainer = document.getElementById('subscribe-container');
    const subscribeMainText = document.getElementById('subscribe-main-text');
    const subscribeSubText = document.getElementById('subscribe-sub-text');
    const emailContainer = document.getElementById('email-container');
    const mailIcon = document.getElementById('mail-icon');
    const emailInput = document.getElementById('email-input');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const popupOverlay = document.getElementById('popup-overlay');
    const closePopupBtn = document.getElementById('close-popup-btn');
    const popup = document.getElementById('popup');
    const side = document.getElementById('side');
    const sidenav = document.getElementById('side-nav');

    function adjustSizes() {
        const screenWidth = window.innerWidth;

        // 기존 컨테이너 및 이미지 크기 설정
        container.style.width = `${screenWidth}px`;
        container.style.height = `${(794 / 390)*screenWidth}px`;

        catImage.style.width = `${(197 / 390) * screenWidth}px`;
        catImage.style.height = `${(422 / 390) * screenWidth}px`;
        catImage.style.top = `${(434 / 390) * screenWidth}px`;
        catImage.style.left = `${(98 / 390) * screenWidth}px`;
        catImage.style.opacity = 1;

        logo.style.width = `${(92 / 390) * screenWidth}px`;
        logo.style.height = `${(28 / 390) * screenWidth}px`;
        logo.style.top = `${(24 / 390) * screenWidth}px`;
        logo.style.left = `${(20 / 390) * screenWidth}px`;
        logo.style.opacity = 1;

        menu.style.width = `${(32 / 390) * screenWidth}px`;
        menu.style.height = `${(32 / 390) * screenWidth}px`;
        menu.style.top = `${(22 / 390) * screenWidth}px`;
        menu.style.left = `${(338 / 390) * screenWidth}px`;
        menu.style.opacity = 1;

        btnContainer.style.width = `${(114 / 390) * screenWidth}px`;
        btnContainer.style.height = `${(40 / 390) * screenWidth}px`;
        btnContainer.style.top = `${(363 / 390) * screenWidth}px`;
        btnContainer.style.left = `${(135 / 390) * screenWidth}px`;
        btnContainer.style.opacity = 1;     

        // 버튼 텍스트 스타일 동적 설정
        buttons.forEach(button => {
            // 버튼 스타일 동적 조정
            button.style.fontFamily = 'Pretendard, sans-serif';
            button.style.fontWeight = 700;
            button.style.width = `${(114 / 390) * screenWidth}px`;
            button.style.height = `${(40 / 390) * screenWidth}px`;
            button.style.borderRadius = `${(40 / 390) * screenWidth}px`;
            button.style.fontSize = `${(14 / 390) * screenWidth}px`;
            button.style.lineHeight = `${(18 / 390) * screenWidth}px`;
            
            // 버튼 클릭 시 이벤트 처리
            button.addEventListener('click', handleClick);
        });

        mtContainer.style.width = `${(251 / 390) * screenWidth}px`;
        mtContainer.style.height = `${(90 / 390) * screenWidth}px`;
        mtContainer.style.top = `${(116 / 390) * screenWidth}px`;
        mtContainer.style.left = `${(67 / 390) * screenWidth}px`;
        mtContainer.style.opacity = 1;   

        stContainer.style.width = `${(270 / 390) * screenWidth}px`;
        stContainer.style.height = `${(98 / 390) * screenWidth}px`;
        stContainer.style.top = `${(236 / 390) * screenWidth}px`;
        stContainer.style.left = `${(57 / 390) * screenWidth}px`;

        maintext.style.fontFamily = 'Pretendard, sans-serif';
        maintext.style.fontSize = `${(24 / 390) * screenWidth}px`;
        maintext.style.fontWeight = 700;
        maintext.style.lineHeight = `${(30 / 390) * screenWidth}px`;
        maintext.style.whiteSpace = 'nowrap'; // 줄바꿈 방지    



        img4.style.width = `${(326 / 390) * screenWidth}px`;
        img4.style.height = `${(190 / 390) * screenWidth}px`;
        img4.style.top = `${(834 / 390) * screenWidth}px`;
        img4.style.left = `${(32 / 390) * screenWidth}px`;
        img4.style.borderRadius = `${(18 / 390) * screenWidth}px`;
        img4.style.opacity = 1;

        mtContainer2.style.width = `${(326 / 390) * screenWidth}px`;
        mtContainer2.style.height = `${(90 / 390) * screenWidth}px`;
        mtContainer2.style.top = `${(1064 / 390) * screenWidth}px`;
        mtContainer2.style.left = `${(32 / 390) * screenWidth}px`;
        mtContainer2.style.opacity = 1;

        stContainer2.style.width = `${(326 / 390) * screenWidth}px`;
        stContainer2.style.height = `${(36 / 390) * screenWidth}px`;
        stContainer2.style.top = `${(1174 / 390) * screenWidth}px`;
        stContainer2.style.left = `${(32 / 390) * screenWidth}px`;

        maintext2.style.fontFamily = 'Pretendard, sans-serif';
        maintext2.style.fontSize = `${(24 / 390) * screenWidth}px`;
        maintext2.style.fontWeight = 700;
        maintext2.style.lineHeight = `${(30 / 390) * screenWidth}px`;
        maintext2.style.whiteSpace = 'nowrap'; // 줄바꿈 방지   

        mtContainer3.style.width = `${(326 / 390) * screenWidth}px`;
        mtContainer3.style.height = `${(60 / 390) * screenWidth}px`;
        mtContainer3.style.top = `${(1270 / 390) * screenWidth}px`;
        mtContainer3.style.left = `${(32 / 390) * screenWidth}px`;
        mtContainer3.style.opacity = 1;

        stContainer3.style.width = `${(326 / 390) * screenWidth}px`;
        stContainer3.style.height = `${(102 / 390) * screenWidth}px`;
        stContainer3.style.top = `${(1360 / 390) * screenWidth}px`;
        stContainer3.style.left = `${(32 / 390) * screenWidth}px`;

        maintext3.style.fontFamily = 'Pretendard, sans-serif';
        maintext3.style.fontSize = `${(24 / 390) * screenWidth}px`;
        maintext3.style.fontWeight = 700;
        maintext3.style.lineHeight = `${(30 / 390) * screenWidth}px`;
        maintext3.style.whiteSpace = 'nowrap'; // 줄바꿈 방지
        maintext3.style.color = "#D97652";

        

        imgcontainer.style.height = `${(2116 / 390) * screenWidth}px`;
        imgcontainer.style.top = `${(1502 / 390) * screenWidth}px`;
        imgcontainer.style.left = `${(32 / 390) * screenWidth}px`;
        imgcontainer.style.opacity = 1;

        images.forEach(img => {
            img.style.width = `${(326 / 390) * screenWidth}px`;
            img.style.height = `${(326 / 390) * screenWidth}px`;
            img.style.borderRadius = `${(18 / 390) * screenWidth}px`;
        });

        moreContainer.style.top = `${(3678 / 390) * screenWidth}px`;
        moreContainer.style.left = `${(86 / 390) * screenWidth}px`;
        moreContainer.style.opacity = 1;

        midtext.style.fontFamily = 'Pretendard, sans-serif';
        midtext.style.fontSize = `${(18 / 390) * screenWidth}px`;
        midtext.style.fontWeight = 700;
        midtext.style.lineHeight = `${(24 / 390) * screenWidth}px`;
        midtext.style.whiteSpace = 'nowrap'; // 줄바꿈 방지

        morebtn.style.fontFamily = 'Pretendard, sans-serif';
        morebtn.style.fontWeight = 700;
        morebtn.style.width = `${(143 / 390) * screenWidth}px`;
        morebtn.style.height = `${(50 / 390) * screenWidth}px`;
        morebtn.style.borderRadius = `${(40 / 390) * screenWidth}px`;
        morebtn.style.fontSize = `${(16 / 390) * screenWidth}px`;
        morebtn.style.lineHeight = `${(20 / 390) * screenWidth}px`;
        morebtn.style.gap = `${(10 / 390) * screenWidth}px`;
        morebtn.addEventListener('click', morehandleClick);

        border.style.width = `${(326 / 390) * screenWidth}px`;
        border.style.height = `${(1 / 390) * screenWidth}px`;
        border.style.top = `${(3840 / 390) * screenWidth}px`;
        border.style.left = `${(32 / 390) * screenWidth}px`;

        maptextContainer.style.width = `${(175 / 390) * screenWidth}px`;
        maptextContainer.style.height = `${(30 / 390) * screenWidth}px`;
        maptextContainer.style.top = `${(3881 / 390) * screenWidth}px`;
        maptextContainer.style.left = `${(32 / 390) * screenWidth}px`;
        maptextContainer.style.opacity = 1;

        submapContainer.style.width = `${(326 / 390) * screenWidth}px`;
        submapContainer.style.height = `${(40 / 390) * screenWidth}px`;
        submapContainer.style.top = `${(3927 / 390) * screenWidth}px`;
        submapContainer.style.left = `${(32 / 390) * screenWidth}px`;

        maintext4.style.fontFamily = 'Pretendard, sans-serif';
        maintext4.style.fontSize = `${(24 / 390) * screenWidth}px`;
        maintext4.style.fontWeight = 700;
        maintext4.style.lineHeight = `${(30 / 390) * screenWidth}px`;
        maintext4.style.whiteSpace = 'nowrap'; // 줄바꿈 방지

        subtext2.style.fontFamily = 'Pretendard, sans-serif';
        subtext2.style.fontSize = `${(16 / 390) * screenWidth}px`;
        subtext2.style.fontWeight = 400;
        subtext2.style.lineHeight = `${(20 / 390) * screenWidth}px`;
        subtext2.style.whiteSpace = 'nowrap'; // 줄바꿈 방지

        subtext3.style.fontFamily = 'Pretendard, sans-serif';
        subtext3.style.fontSize = `${(16 / 390) * screenWidth}px`;
        subtext3.style.fontWeight = 400;
        subtext3.style.lineHeight = `${(20 / 390) * screenWidth}px`;
        subtext3.style.whiteSpace = 'nowrap'; // 줄바꿈 방지

        mapContainer.style.width = `${(326 / 390) * screenWidth}px`;
        mapContainer.style.height = `${(132 / 390) * screenWidth}px`;
        mapContainer.style.top = `${(3995 / 390) * screenWidth}px`;
        mapContainer.style.left = `${(32 / 390) * screenWidth}px`;
        mapContainer.style.opacity = 1;

        map.style.width = `${(326 / 390) * screenWidth}px`;
        map.style.height = `${(132 / 390) * screenWidth}px`;
        map.style.borderRadius = `${(12 / 390) * screenWidth}px`;
        map.style.opacity = 1;

        img8.style.width = `${(390 / 390) * screenWidth}px`;
        img8.style.height = `${(240 / 390) * screenWidth}px`;
        img8.style.top = `${(4447 / 390) * screenWidth}px`;
        img8.style.opacity = 1;

        footer.style.width = `${screenWidth}px`;
        footer.style.height = `${(178 / 390) * screenWidth}px`;
        footer.style.top = `${(4687 / 390) * screenWidth}px`;

        logo2.style.width = `${(112 / 390) * screenWidth}px`;
        logo2.style.height = `${(34 / 390) * screenWidth}px`;
        logo2.style.top = `${(30 / 390) * screenWidth}px`;
        logo2.style.left = `${(20 / 390) * screenWidth}px`;
        logo2.style.opacity = 1;

        footerMenu.style.width = `${(84/390)*screenWidth}px`;
        footerMenu.style.height = `${(120 / 390) * screenWidth}px`;
        footerMenu.style.top = `${(20 / 390) * screenWidth}px`;
        footerMenu.style.left = `${(285 / 390) * screenWidth}px`;

        footerIcon.style.width = `${(176/390)*screenWidth}px`;
        footerIcon.style.height = `${(32 / 390) * screenWidth}px`;
        footerIcon.style.top = `${(122 / 390) * screenWidth}px`;

        // 각 버튼의 위치 설정
        const blogButton = document.querySelector('.blog');
        const instaButton = document.querySelector('.insta');
        const facebookButton = document.querySelector('.facebook');
        const youtubeButton = document.querySelector('.youtube');

        blogButton.style.left = `${(20 / 390) * screenWidth}px`;
        blogButton.addEventListener('click', blog);
        instaButton.style.left = `${(68 / 390) * screenWidth}px`;
        instaButton.addEventListener('click', insta);
        facebookButton.style.left = `${(116 / 390) * screenWidth}px`;
        facebookButton.addEventListener('click', facebook);
        youtubeButton.style.left = `${(164 / 390) * screenWidth}px`;
        youtubeButton.addEventListener('click', youtube);

        [blogButton, instaButton, facebookButton, youtubeButton].forEach(button => {
            button.style.width = `${(32 / 390) * screenWidth}px`;
            button.style.height = `${(32 / 390) * screenWidth}px`;

            // 이미지 크기 설정
            const img = button.querySelector('img');
            img.style.width = `${(18.29 / 390) * screenWidth}px`;
            img.style.height = `${(18.29 / 390) * screenWidth}px`;
            img.style.position = 'absolute';
            img.style.left = '50%';
            img.style.top = '50%';
            img.style.transform = 'translate(-50%, -50%)';
        });

        subscribeContainer.style.width = `${(326 / 390) * screenWidth}px`;
        subscribeContainer.style.height = `${(348 / 390) * screenWidth}px`;
        subscribeContainer.style.top = `${(4167 / 390) * screenWidth}px`;
        subscribeContainer.style.left = `${(32 / 390) * screenWidth}px`;
        subscribeContainer.style.borderRadius = `${(18 / 390) * screenWidth}px`;
        subscribeContainer.style.opacity = 1;

        subscribeMainText.style.width = `${(187 / 390) * screenWidth}px`;
        subscribeMainText.style.height = `${(60 / 390) * screenWidth}px`;
        subscribeMainText.style.top = `${(36 / 390) * screenWidth}px`;
        subscribeMainText.style.left = `${(32 / 390) * screenWidth}px`;
        subscribeMainText.style.opacity = 1;

        subscribeSubText.style.width = `${(262 / 390) * screenWidth}px`;
        subscribeSubText.style.height = `${(72 / 390) * screenWidth}px`;
        subscribeSubText.style.top = `${(116 / 390) * screenWidth}px`;
        subscribeSubText.style.left = `${(32 / 390) * screenWidth}px`;
        subscribeSubText.style.opacity = 1;

        emailContainer.style.width = `${(262 / 390) * screenWidth}px`;
        emailContainer.style.height = `${(40 / 390) * screenWidth}px`;
        emailContainer.style.top = `${(218 / 390) * screenWidth}px`;
        emailContainer.style.left = `${(32 / 390) * screenWidth}px`;
        emailContainer.style.borderRadius = `${(60 / 390) * screenWidth}px`;

        mailIcon.style.width = `${(18 / 390) * screenWidth}px`;
        mailIcon.style.height = `${(18 / 390) * screenWidth}px`;
        mailIcon.style.marginLeft = `${(16 / 390) * screenWidth}px`;

        emailInput.style.fontSize = `${(12 / 390) * screenWidth}px`;
        emailInput.style.paddingLeft = `${(16 / 390) * screenWidth}px`;
        emailInput.style.marginRight = `${(16 / 390) * screenWidth}px`;

        subscribeBtn.style.width = `${(115 / 390) * screenWidth}px`;
        subscribeBtn.style.height = `${(40 / 390) * screenWidth}px`;
        subscribeBtn.style.top = `${(278 / 390) * screenWidth}px`;
        subscribeBtn.style.left = `${(177 / 390) * screenWidth}px`;
        subscribeBtn.style.fontSize = `${(14 / 390) * screenWidth}px`;
        subscribeBtn.style.borderRadius = `${(40 / 390) * screenWidth}px`;

        maintext5.style.fontFamily = 'Pretendard, sans-serif';
        maintext5.style.fontSize = `${(24 / 390) * screenWidth}px`;
        maintext5.style.fontWeight = 700;
        maintext5.style.lineHeight = `${(30 / 390) * screenWidth}px`;
        maintext5.style.whiteSpace = 'nowrap'; // 줄바꿈 방지 

        const baseFontSize = (14 / 390) * screenWidth; // 폰트 크기를 화면 너비에 따라 조정
        subtexts.forEach(text => {
            text.style.fontFamily = 'Pretendard, sans-serif';
            text.style.fontSize = `${baseFontSize}px`;
            text.style.fontWeight = 400;
            text.style.lineHeight = `${(18 / 390) * screenWidth}px`; // line-height도 조정
            text.style.whiteSpace = 'nowrap'; // 줄바꿈 방지
        });

        function isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }

        function adjustPopupSize() {
            const screenWidth = window.innerWidth;
    
            const popupWidth = (300 / 390) * screenWidth;
            const popupHeight = (300 / 390) * screenWidth;
            const borderRadius = (30 / 390) * screenWidth;
    
            popup.style.width = `${popupWidth}px`;
            popup.style.height = `${popupHeight}px`;
            popup.style.borderRadius = `${borderRadius}px`;
        }
    
        // Subscribe 버튼 클릭 이벤트
        subscribeBtn.addEventListener('click', function() {
            const email = emailInput.value;
    
            if (isValidEmail(email)) {
                // 이메일 형식이 올바르면 팝업 표시
                adjustPopupSize();  // 팝업 크기 조정
                popupOverlay.style.display = 'flex';
            } else {
                // 이메일 형식이 올바르지 않으면 알림 표시
                alert('이메일 형식이 올바르지 않습니다');
            }
        });

        closePopupBtn.addEventListener('click', function() {
            popupOverlay.style.display = 'none';
        });

        function sidebar(){
            const screenWidth = window.innerWidth;
    
            const sidebarWidth = (289/ 390) * screenWidth;
            const sidebarHeight = window.innerHeight;

            side.style.width = `${sidebarWidth}px`;
            side.style.height = `${sidebarHeight}px`;
        }

        menu.addEventListener('click', function() {
            sidenav.style.display = 'flex'
        });

        
    }

    function handleClick() {
        alert('다운로드!');
    }

    function morehandleClick() {
        alert('더보기!');
    }

    function blog() {
        alert('블로그');
    }

    function insta() {
        alert('인스타그램');
    }

    function facebook() {
        alert('페이스북');
    }

    function youtube() {
        alert('유튜브');
    }

    function initKakaoMap() {
        var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        var mapOption = {
            center: new kakao.maps.LatLng(33.442337972, 126.571449734542), // 지도의 중심 좌표 (제주도 예시)
            level: 4 // 지도의 확대 레벨
        }; 
    
        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
        // 마커를 표시할 위치와 title 변수
        var markerPosition = new kakao.maps.LatLng(33.442337972, 126.571449734542); 
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map); // 마커를 지도에 표시합니다
    
        // 줌 컨트롤을 생성하여 지도에 추가합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    
        // 지도/스카이뷰 전환 컨트롤을 생성하여 지도에 추가합니다
        var mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    
    }

    adjustSizes();
    window.addEventListener('resize', adjustSizes);
    kakao.maps.load(function() {
        initKakaoMap();
    });
});
