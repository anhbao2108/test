$(document).ready(function() {
    /* ========================================== */
    /* 1. LOGIC CHO BANNER SLIDESHOW              */
    /* ========================================== */
    
    // Lấy danh sách các slide
    const slides = $('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let autoSlideInterval;

    // Kiểm tra xem trang có slider không (để tránh lỗi nếu dùng file này cho trang khác)
    if (totalSlides > 0) {
        
        // Hàm hiển thị slide cụ thể
        function showSlide(index) {
            // Ẩn slide hiện tại (dùng hiệu ứng fadeOut của jQuery)
            slides.fadeOut(500).removeClass('active');
            
            // Hiện slide mới
            $(slides[index]).fadeIn(500).addClass('active');
        }

        // Hàm bắt đầu chạy tự động
        function startAutoSlide() {
            // Xóa interval cũ nếu có để tránh chạy chồng chéo
            if (autoSlideInterval) clearInterval(autoSlideInterval);
            
            autoSlideInterval = setInterval(function() {
                // Tăng index, nếu hết thì quay về 0
                currentSlide = (currentSlide + 1) % totalSlides;
                showSlide(currentSlide);
            }, 4000); // 4000ms = 4 giây chuyển 1 lần
        }

        // --- XỬ LÝ SỰ KIỆN CLICK NÚT ---

        // 1. Nút Next (Tiếp theo)
        $('.next-btn').click(function() {
            clearInterval(autoSlideInterval); // Tạm dừng tự động
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
            startAutoSlide(); // Khởi động lại tự động
        });

        // 2. Nút Prev (Lùi lại)
        $('.prev-btn').click(function() {
            clearInterval(autoSlideInterval); // Tạm dừng tự động
            // Công thức lùi vòng tròn (nếu về âm thì nhảy xuống cuối)
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
            startAutoSlide(); // Khởi động lại tự động
        });

        // Kích hoạt chạy tự động khi vào trang
        startAutoSlide();
    }

    /* ========================================== */
    /* 2. HIỆU ỨNG CUỘN TRANG (SCROLL ANIMATION)  */
    /* (Tùy chọn: Làm các section hiện dần lên)   */
    /* ========================================== */
    
    // Khi người dùng cuộn chuột
    $(window).scroll(function() {
        // Lấy vị trí cuộn hiện tại + chiều cao cửa sổ
        var scrollPos = $(window).scrollTop() + $(window).height() - 100;

        // Duyệt qua các section chính
        $('.section-doctors, .section-services-highlight, .section-promo').each(function() {
            // Nếu cuộn tới vị trí của section đó
            if (scrollPos > $(this).offset().top) {
                // Thêm class 'visible' (Bạn có thể thêm CSS cho class này nếu muốn hiệu ứng bay vào)
                $(this).css('opacity', '1'); 
            }
        });
    });
});
