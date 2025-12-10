document.addEventListener("DOMContentLoaded", function() {
    // 1. Chọn tất cả các thẻ bài viết
    const newsItems = document.querySelectorAll('.news-item');

    // 2. Kiểm tra nếu trình duyệt hỗ trợ IntersectionObserver
    if ('IntersectionObserver' in window) {
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Nếu bài viết lọt vào màn hình
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Thêm class để hiện ra
                    observer.unobserve(entry.target); // Không theo dõi nữa
                }
            });
        }, { threshold: 0.15 }); // Hiện khi thấy 15%

        newsItems.forEach(item => {
            observer.observe(item);
        });

    } else {
        // Fallback: Nếu trình duyệt cũ quá thì hiện luôn
        newsItems.forEach(item => item.classList.add('visible'));
    }
});
