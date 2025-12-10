document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Chọn tất cả các thẻ bài viết (news-item)
    const newsItems = document.querySelectorAll('.news-item');

    // 2. Sử dụng IntersectionObserver để kiểm tra khi nào bài viết xuất hiện
    if ('IntersectionObserver' in window) {
        
        const observerOptions = {
            root: null,        // Theo dõi trong viewport
            rootMargin: '0px', // Không có lề
            threshold: 0.15    // Kích hoạt khi 15% bài viết hiện ra
        };

        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Thêm class 'is-visible' để chạy animation CSS
                    entry.target.classList.add('is-visible');
                    
                    // Ngừng theo dõi phần tử này sau khi đã hiện
                    observerInstance.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Bắt đầu theo dõi từng bài viết
        newsItems.forEach(item => {
            observer.observe(item);
        });

    } else {
        // Fallback: Nếu trình duyệt quá cũ không hỗ trợ Observer, hiện luôn nội dung
        newsItems.forEach(item => {
            item.classList.add('is-visible');
            item.style.opacity = 1;
            item.style.transform = 'none';
        });
    }
});
