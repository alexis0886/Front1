document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const imgcontainer = document.getElementById('image-container');
    const imgcontainer2 = document.getElementById('image-container2');
    const catImage = document.getElementById('cat-image');
    const img4 = document.getElementById('img4');
    const images = document.querySelectorAll('#image-container img');

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

        // 기존 컨테이너 및 이미지 크기 설정
        container.style.width = `${containerWidth}px`;
        container.style.height = `${containerHeight}px`;

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
        imgcontainer.style.height = `${(378 / 900) * containerHeight}px`;
        imgcontainer.style.top = `${(1720 / 900) * containerHeight}px`;
        imgcontainer.style.left = `${(320 / 1920) * containerWidth}px`;
        imgcontainer.style.opacity = 1;

        imgcontainer2.style.width = `${(1280 / 1920) * containerWidth}px`;
        imgcontainer2.style.height = `${(378 / 900) * containerHeight}px`;
        imgcontainer2.style.top = `${(2170 / 900) * containerHeight}px`;
        imgcontainer2.style.left = `${(320 / 1920) * containerWidth}px`;
        imgcontainer2.style.opacity = 1;

        images.forEach(img => {
            img.style.width = `${(378 / 1920) * containerWidth}px`;
            img.style.height = `${(378 / 900) * containerHeight}px`;
            img.style.borderRadius = `${(30 / 1920) * containerWidth}px 0px 0px 0px`;
        });
    }

    adjustSizes();
    window.addEventListener('resize', adjustSizes);
});
