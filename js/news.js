document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. XỬ LÝ MENU MOBILE (Cho Header đồng bộ) ---
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');

    if(menu) {
        menu.onclick = () => {
            menu.classList.toggle('fa-times'); // Đổi icon bar thành X
            navbar.classList.toggle('active'); // Hiện menu
        }
    }

    // Ẩn menu khi scroll
    window.onscroll = () => {
        if(menu) {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        }
    }

    // --- 2. XỬ LÝ ANIMATION FADE-IN (News & Detail) ---
    const animatedElements = document.querySelectorAll('.anim-element');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Thêm delay nhỏ để các phần tử hiện lần lượt
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150); 
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Hiện khi thấy 10% phần tử

    animatedElements.forEach(el => observer.observe(el));
});
