document.addEventListener("DOMContentLoaded", function() {
    // Xử lý hiệu ứng Fade-in khi scroll
    const animatedElements = document.querySelectorAll('.anim-text');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); 
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
});
