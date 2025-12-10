/**
 * JS Xử lý hiệu ứng Fade-in cho trang Tin tức
 * Sử dụng IntersectionObserver để tối ưu hiệu suất
 */

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Chọn tất cả các phần tử bài viết cần hiệu ứng
    // Sử dụng selector class chung đã định nghĩa trong HTML
    const newsItems = document.querySelectorAll('.news-item');

    // Kiểm tra an toàn: Nếu không có bài viết nào thì dừng
    if (!newsItems || newsItems.length === 0) {
        return;
    }

    // 2. Cấu hình Observer
    const observerOptions = {
        root: null,        // Theo dõi trong viewport trình duyệt
        rootMargin: '0px', // Không lề phụ
        threshold: 0.15    // Kích hoạt khi 15% phần tử xuất hiện
    };

    // 3. Khởi tạo IntersectionObserver
    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            // Nếu phần tử xuất hiện trong vùng nhìn thấy
            if (entry.isIntersecting) {
                const item = entry.target;
                
                // Thêm class để kích hoạt CSS Transition
                item.classList.add('is-visible');

                // Ngừng theo dõi phần tử này (chỉ fade-in 1 lần)
                observerInstance.unobserve(item);
            }
        });
    }, observerOptions);

    // 4. Bắt đầu theo dõi từng bài viết
    newsItems.forEach(item => {
        observer.observe(item);
    });

    // Xử lý Fallback cho trình duyệt quá cũ không hỗ trợ IntersectionObserver
    // (Mặc dù hầu hết trình duyệt hiện đại đều hỗ trợ)
    if (!('IntersectionObserver' in window)) {
        newsItems.forEach(item => item.classList.add('is-visible'));
    }
});
