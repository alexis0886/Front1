document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('header');
    const container = document.getElementById('container');
    const imgcontainer = document.getElementById('image-container');
    const imgcontainer2 = document.getElementById('image-container2');
    const catImage = document.getElementById('cat-image');
    const img4 = document.getElementById('img4');
    const logo = document.getElementById('logo');
    const logo2 = document.getElementById('logo2');
    const textContainer = document.getElementById('text-container');
    const btnContainer = document.getElementById('btn-container');
    const btnContainer2 = document.getElementById('btn-container2');
    const buttons = document.querySelectorAll('.btn');
    const images = document.querySelectorAll('#image-container img, #image-container2 img');
    const mtContainer = document.getElementById('main_text-container')
    const stContainer = document.getElementById('sub_text-container')
    const mtContainer2 = document.getElementById('main_text-container2')
    const stContainer2 = document.getElementById('sub_text-container2')
    const mtContainer3 = document.getElementById('main_text-container3')
    const maptextContainer = document.getElementById('map_text-container')
    const stContainer3 = document.getElementById('sub_text-container3')
    const moreContainer = document.getElementById('more-container')
    const submapContainer = document.getElementById('sub_map_text-container')
    const mapContainer = document.getElementById('map-container')
    const map = document.getElementById('map')
    const maintext = document.querySelector('.main_text');
    const subtexts = document.querySelectorAll('.sub_text');
    const maintext2 = document.querySelectorAll('.main_text2');
    const maintext3 = document.querySelector('.main_text3');
    const midtext = document.querySelector('.mid_text');
    const subtext = document.querySelector('.sub_text2');
    const morebtn = document.querySelector('.morebtn');
    const border = document.getElementById('border');
    const img8 = document.getElementById('img8');
    const footer = document.getElementById('footer');
    const footerIcon = document.getElementById('footer-icon');
    const subscribeContainer = document.getElementById('subscribe-container');
    const subscribeMainText = document.getElementById('subscribe-main-text');
    const subscribeSubText = document.getElementById('subscribe-sub-text');
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    const scrollTopImg = scrollTopBtn.querySelector('img');
    const emailContainer = document.getElementById('email-container');
    const mailIcon = document.getElementById('mail-icon');
    const emailInput = document.getElementById('email-input');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const popupOverlay = document.getElementById('popup-overlay');
    const closePopupBtn = document.getElementById('close-popup-btn');
    const popup = document.getElementById('popup');

    function adjustSizes() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const aspectRatio = 1920 / 900;

        let containerWidth, containerHeight;

        if (screenWidth / screenHeight > aspectRatio) {
            containerHeight = screenHeight;
            containerWidth = containerHeight * aspectRatio;
        } else {
            containerWidth = screenWidth;
            containerHeight = containerWidth / aspectRatio;
        }
        
        header.style.width = `${containerWidth}px`;
        header.style.height = `${(100/900)*containerHeight}px`;
        
        container.style.width = `${containerWidth}px`;
        container.style.height = `${(800/900)*containerHeight}px`;
        container.style.paddingTop = `${(100 / 900) * containerHeight}px`;


        catImage.style.width = `${(415 / 1920) * containerWidth}px`;
        catImage.style.height = `${(766 / 900) * containerHeight}px`;
        catImage.style.top = `${(136 / 900) * containerHeight}px`;
        catImage.style.left = `${(1185 / 1920) * containerWidth}px`;
        catImage.style.opacity = 1;

        img4.style.width = `${(660 / 1920) * containerWidth}px`;
        img4.style.height = `${(390 / 900) * containerHeight}px`;
        img4.style.top = `${(980 / 900) * containerHeight}px`;
        img4.style.left = `${(320 / 1920) * containerWidth}px`;
        img4.style.borderRadius = `${(30 / 1920) * containerWidth}px 0px 0px 0px`;
        img4.style.opacity = 1;

        imgcontainer.style.width = `${(1280 / 1920) * containerWidth}px`;
        imgcontainer.style.top = `${(1720 / 900) * containerHeight}px`;
        imgcontainer.style.left = `${(320 / 1920) * containerWidth}px`;
        imgcontainer.style.opacity = 1;

        imgcontainer2.style.width = `${(1280 / 1920) * containerWidth}px`;
        imgcontainer2.style.top = `${(2170 / 900) * containerHeight}px`;
        imgcontainer2.style.left = `${(320 / 1920) * containerWidth}px`;
        imgcontainer2.style.opacity = 1;

        logo.style.width = `${(130 / 1920) * containerWidth}px`;
        logo.style.height = `${(40 / 900) * containerHeight}px`;
        logo.style.top = `${(31 / 900) * containerHeight}px`;
        logo.style.left = `${(320 / 1920) * containerWidth}px`;
        logo.style.opacity = 1;

        textContainer.style.width = `${(205 / 1920) * containerWidth}px`;
        textContainer.style.height = `${(20 / 900) * containerHeight}px`;
        textContainer.style.top = `${(41 / 900) * containerHeight}px`;
        textContainer.style.left = `${(1206 / 1920) * containerWidth}px`;
        textContainer.style.gap = `${(30 / 1920) * containerWidth}px`;
        textContainer.style.opacity = 1;

        btnContainer.style.width = `${(140 / 1920) * containerWidth}px`;
        btnContainer.style.height = `${(50 / 900) * containerHeight}px`;
        btnContainer.style.top = `${(26 / 900) * containerHeight}px`;
        btnContainer.style.left = `${(1460 / 1920) * containerWidth}px`;
        btnContainer.style.opacity = 1;     

        btnContainer2.style.width = `${(140 / 1920) * containerWidth}px`;
        btnContainer2.style.height = `${(50 / 900) * containerHeight}px`;
        btnContainer2.style.top = `${(590 / 900) * containerHeight}px`;
        btnContainer2.style.left = `${(320 / 1920) * containerWidth}px`;
        btnContainer2.style.opacity = 1;  

        buttons.forEach(button => {
            button.style.fontFamily = 'Pretendard, sans-serif';
            button.style.fontWeight = 700;
            button.style.width = `${(140 / 1920) * containerWidth}px`;
            button.style.height = `${(50 / 900) * containerHeight}px`;
            button.style.borderRadius = `${(40 / 1920) * containerWidth}px`;
            button.style.fontSize = `${(16 / 1920) * containerWidth}px`;
            button.style.lineHeight = `${(20 / 1920) * containerWidth}px`;
            
            button.addEventListener('click', handleClick);
        });

        mtContainer.style.width = `${(695 / 1920) * containerWidth}px`;
        mtContainer.style.height = `${(120 / 900) * containerHeight}px`;
        mtContainer.style.top = `${(304 / 900) * containerHeight}px`;
        mtContainer.style.left = `${(320 / 1920) * containerWidth}px`;
        mtContainer.style.opacity = 1;   

        stContainer.style.width = `${(420 / 1920) * containerWidth}px`;
        stContainer.style.height = `${(86 / 900) * containerHeight}px`;
        stContainer.style.top = `${(464 / 900) * containerHeight}px`;
        stContainer.style.left = `${(320 / 1920) * containerWidth}px`;

        mtContainer2.style.width = `${(510 / 1920) * containerWidth}px`;
        mtContainer2.style.height = `${(135 / 900) * containerHeight}px`;
        mtContainer2.style.top = `${(1072 / 900) * containerHeight}px`;
        mtContainer2.style.left = `${(1090 / 1920) * containerWidth}px`;
        mtContainer2.style.opacity = 1;

        stContainer2.style.width = `${(510 / 1920) * containerWidth}px`;
        stContainer2.style.height = `${(40 / 900) * containerHeight}px`;
        stContainer2.style.top = `${(1237 / 900) * containerHeight}px`;
        stContainer2.style.left = `${(1090 / 1920) * containerWidth}px`;

        mtContainer3.style.width = `${(875 / 1920) * containerWidth}px`;
        mtContainer3.style.height = `${(60 / 900) * containerHeight}px`;
        mtContainer3.style.top = `${(1490 / 900) * containerHeight}px`;
        mtContainer3.style.left = `${(523 / 1920) * containerWidth}px`;
        mtContainer3.style.opacity = 1;

        stContainer3.style.width = `${(710 / 1920) * containerWidth}px`;
        stContainer3.style.height = `${(42 / 900) * containerHeight}px`;
        stContainer3.style.top = `${(1590 / 900) * containerHeight}px`;
        stContainer3.style.left = `${(605 / 1920) * containerWidth}px`;

        moreContainer.style.top = `${(2648 / 900) * containerHeight}px`;
        moreContainer.style.left = `${(815 / 1920) * containerWidth}px`;
        moreContainer.style.opacity = 1;

        maintext.style.fontFamily = 'Pretendard, sans-serif';
        maintext.style.fontSize = `${(48 / 1920) * containerWidth}px`;
        maintext.style.fontWeight = 700;
        maintext.style.lineHeight = `${(60 / 1920) * containerWidth}px`;
        maintext.style.whiteSpace = 'nowrap';   

        maintext3.style.fontFamily = 'Pretendard, sans-serif';
        maintext3.style.fontSize = `${(48 / 1920) * containerWidth}px`;
        maintext3.style.fontWeight = 700;
        maintext3.style.lineHeight = `${(60 / 1920) * containerWidth}px`;
        maintext3.style.whiteSpace = 'nowrap';
        maintext3.style.color = "#D97652";

        midtext.style.fontFamily = 'Pretendard, sans-serif';
        midtext.style.fontSize = `${(24 / 1920) * containerWidth}px`;
        midtext.style.fontWeight = 700;
        midtext.style.lineHeight = `${(30 / 1920) * containerWidth}px`;
        midtext.style.whiteSpace = 'nowrap';

        morebtn.style.fontFamily = 'Pretendard, sans-serif';
        morebtn.style.fontWeight = 700;
        morebtn.style.width = `${(143 / 1920) * containerWidth}px`;
        morebtn.style.height = `${(50 / 900) * containerHeight}px`;
        morebtn.style.borderRadius = `${(40 / 1920) * containerWidth}px`;
        morebtn.style.fontSize = `${(16 / 1920) * containerWidth}px`;
        morebtn.style.lineHeight = `${(20 / 1920) * containerWidth}px`;
        morebtn.style.gap = `${(10 / 1920) * containerWidth}px`;
        morebtn.addEventListener('click', morehandleClick);

        border.style.width = `${(1280 / 1920) * containerWidth}px`;
        border.style.height = `${(1 / 900) * containerHeight}px`;
        border.style.top = `${(2836 / 900) * containerHeight}px`;
        border.style.left = `${(320 / 1920) * containerWidth}px`;

        maptextContainer.style.width = `${(263 / 1920) * containerWidth}px`;
        maptextContainer.style.height = `${(45 / 900) * containerHeight}px`;
        maptextContainer.style.top = `${(2905 / 900) * containerHeight}px`;
        maptextContainer.style.left = `${(320 / 1920) * containerWidth}px`;
        maptextContainer.style.opacity = 1;

        submapContainer.style.width = `${(395 / 1920) * containerWidth}px`;
        submapContainer.style.height = `${(20 / 900) * containerHeight}px`;
        submapContainer.style.top = `${(2970 / 900) * containerHeight}px`;
        submapContainer.style.left = `${(320 / 1920) * containerWidth}px`;
        maptextContainer.style.opacity = 1;

        mapContainer.style.width = `${(1280 / 1920) * containerWidth}px`;
        mapContainer.style.height = `${(520 / 900) * containerHeight}px`;
        mapContainer.style.top = `${(3038 / 900) * containerHeight}px`;
        mapContainer.style.left = `${(320 / 1920) * containerWidth}px`;
        mapContainer.style.opacity = 1;

        map.style.width = `${(1280 / 1920) * containerWidth}px`;
        map.style.height = `${(520 / 900) * containerHeight}px`;
        map.style.borderRadius = `${(12 / 1920) * containerWidth}px`;
        map.style.opacity = 1;

        img8.style.width = `${(1920 / 1920) * containerWidth}px`;
        img8.style.height = `${(340 / 900) * containerHeight}px`;
        img8.style.top = `${(3739 / 900) * containerHeight}px`;
        img8.style.opacity = 1;

        footer.style.width = `${containerWidth}px`;
        footer.style.height = `${(160 / 900) * containerHeight}px`;
        footer.style.top = `${(4079 / 900) * containerHeight}px`;

        logo2.style.width = `${(226 / 1920) * containerWidth}px`;
        logo2.style.height = `${(70 / 900) * containerHeight}px`;
        logo2.style.top = `${(45 / 900) * containerHeight}px`;
        logo2.style.left = `${(320 / 1920) * containerWidth}px`;
        logo2.style.opacity = 1;

        footerIcon.style.width = `${containerWidth}px`;
        footerIcon.style.height = `${(42 / 900) * containerHeight}px`;
        footerIcon.style.top = `${(58 / 900) * containerHeight}px`;

        const blogButton = document.querySelector('.blog');
        const instaButton = document.querySelector('.insta');
        const facebookButton = document.querySelector('.facebook');
        const youtubeButton = document.querySelector('.youtube');

        blogButton.style.left = `${(1372 / 1920) * containerWidth}px`;
        blogButton.addEventListener('click', blog);
        instaButton.style.left = `${(1434 / 1920) * containerWidth}px`;
        instaButton.addEventListener('click', insta);
        facebookButton.style.left = `${(1496 / 1920) * containerWidth}px`;
        facebookButton.addEventListener('click', facebook);
        youtubeButton.style.left = `${(1558 / 1920) * containerWidth}px`;
        youtubeButton.addEventListener('click', youtube);

        [blogButton, instaButton, facebookButton, youtubeButton].forEach(button => {
            button.style.width = `${(42 / 1920) * containerWidth}px`;
            button.style.height = `${(42 / 900) * containerHeight}px`;

            const img = button.querySelector('img');
            img.style.width = `${(24 / 1920) * containerWidth}px`;
            img.style.height = `${(24 / 900) * containerHeight}px`;
            img.style.position = 'absolute';
            img.style.left = '50%';
            img.style.top = '50%';
            img.style.transform = 'translate(-50%, -50%)';
        });

        subscribeContainer.style.width = `${(1280 / 1920) * containerWidth}px`;
        subscribeContainer.style.height = `${(200 / 900) * containerHeight}px`;
        subscribeContainer.style.top = `${(3638 / 900) * containerHeight}px`;
        subscribeContainer.style.left = `${(320 / 1920) * containerWidth}px`;
        subscribeContainer.style.borderRadius = `${(30 / 1920) * containerWidth}px`;
        subscribeContainer.style.opacity = 1;

        subscribeMainText.style.width = `${(448 / 1920) * containerWidth}px`;
        subscribeMainText.style.height = `${(45 / 900) * containerHeight}px`;
        subscribeMainText.style.top = `${(51 / 900) * containerHeight}px`;
        subscribeMainText.style.left = `${(58 / 1920) * containerWidth}px`;
        subscribeMainText.style.opacity = 1;

        subscribeSubText.style.width = `${(471 / 1920) * containerWidth}px`;
        subscribeSubText.style.height = `${(36 / 900) * containerHeight}px`;
        subscribeSubText.style.top = `${(114 / 900) * containerHeight}px`;
        subscribeSubText.style.left = `${(58 / 1920) * containerWidth}px`;
        subscribeSubText.style.opacity = 1;

        subtext.style.fontFamily = 'Pretendard, sans-serif';
        subtext.style.fontSize = `${(14 / 1920) * containerWidth}px`;
        subtext.style.fontWeight = 400;
        subtext.style.lineHeight = `${(18 / 1920) * containerWidth}px`;
        subtext.style.whiteSpace = 'nowrap';

        images.forEach(img => {
            img.style.width = `${(378 / 1920) * containerWidth}px`;
            img.style.height = `${(378 / 900) * containerHeight}px`;
            img.style.borderRadius = `${(30 / 1920) * containerWidth}`;
        });

        maintext2.forEach(text => {
            text.style.fontFamily = 'Pretendard, sans-serif';
            text.style.fontSize = `${(36 / 1920) * containerWidth}px`;
            text.style.fontWeight = 700;
            text.style.lineHeight = `${(45 / 1920) * containerWidth}px`;
            text.style.whiteSpace = 'nowrap';

        });

        emailContainer.style.width = `${(530 / 1920) * containerWidth}px`;
        emailContainer.style.height = `${(60 / 900) * containerHeight}px`;
        emailContainer.style.top = `${(70 / 900) * containerHeight}px`;
        emailContainer.style.left = `${(692 / 1920) * containerWidth}px`;
        emailContainer.style.borderRadius = `${(60 / 1920) * containerWidth}px`;

        mailIcon.style.width = `${(24 / 1920) * containerWidth}px`;
        mailIcon.style.height = `${(24 / 900) * containerHeight}px`;
        mailIcon.style.marginLeft = `${(28 / 1920) * containerWidth}px`;

        emailInput.style.fontSize = `${(16 / 1920) * containerWidth}px`;
        emailInput.style.paddingLeft = `${(16 / 1920) * containerWidth}px`;
        emailInput.style.marginRight = `${(150 / 1920) * containerWidth}px`;

        subscribeBtn.style.width = `${(135 / 1920) * containerWidth}px`;
        subscribeBtn.style.height = `${(50 / 900) * containerHeight}px`;
        subscribeBtn.style.left = `${(389 / 1920) * containerWidth}px`;
        subscribeBtn.style.fontSize = `${(16 / 1920) * containerWidth}px`;
        subscribeBtn.style.borderRadius = `${(40 / 1920) * containerWidth}px`;
        
        scrollTopBtn.style.width = `${(50 / 1920) * containerWidth}px`;
        scrollTopBtn.style.height = `${(50 / 900) * containerHeight}px`;
        scrollTopBtn.style.right = `${(24 / 1920) * containerWidth}px`;
        scrollTopBtn.style.bottom = `${(24 / 900) * containerHeight}px`;
        subscribeBtn.style.fontSize = `${(16 / 1920) * containerWidth}px`;
        subscribeBtn.style.lineHeight = `${(20 / 1920) * containerWidth}px`;

        function isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }
    
        function adjustPopupSize() {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
    
            const popupWidth = (600 / 1920) * screenWidth;
            const popupHeight = (400 / 900) * screenHeight;
            const borderRadius = (30 / 1920) * screenWidth;
    
            popup.style.width = `${popupWidth}px`;
            popup.style.height = `${popupHeight}px`;
            popup.style.borderRadius = `${borderRadius}px`;
        }
    
        subscribeBtn.addEventListener('click', function() {
            const email = emailInput.value;
    
            if (isValidEmail(email)) {
                adjustPopupSize();
                popupOverlay.style.display = 'flex';
            } else {
                alert('이메일 형식이 올바르지 않습니다');
            }
        });
    
        closePopupBtn.addEventListener('click', function() {
            popupOverlay.style.display = 'none';
        });

        window.addEventListener('resize', adjustPopupSize);

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
            if (scrollTop > 0) {
                scrollTopBtn.classList.add('active');
                scrollTopImg.src = 'scroll-top-btn_active.svg';
            } else {
                scrollTopBtn.classList.remove('active');
                scrollTopImg.src = 'scroll-top-btn.svg';
            }
    
            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const btnBottomDistance = footerRect.top - windowHeight + 24;
    
            if (btnBottomDistance < 0) {
                scrollTopBtn.style.bottom = `${(windowHeight-footerRect.top+(24 / 900) * containerHeight)}px`;
            } else {
                scrollTopBtn.style.bottom = `${(24 / 900) * containerHeight}px`;
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        const baseFontSize = (16 / 1920) * containerWidth;
        subtexts.forEach(text => {
            text.style.fontFamily = 'Pretendard, sans-serif';
            text.style.fontSize = `${baseFontSize}px`;
            text.style.fontWeight = 400;
            text.style.lineHeight = `${(20 / 1920) * containerWidth}px`;
            text.style.whiteSpace = 'nowrap';
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
        var mapContainer = document.getElementById('map');
        var mapOption = {
            center: new kakao.maps.LatLng(33.442337972, 126.571449734542),
            level: 4
        }; 
    
        var map = new kakao.maps.Map(mapContainer, mapOption);
    
        var markerPosition = new kakao.maps.LatLng(33.442337972, 126.571449734542); 
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    
        var mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    
    }

    adjustSizes();
    window.addEventListener('resize', adjustSizes);
    kakao.maps.load(function() {
        initKakaoMap();
    });
});
