// js/common.js

function loadFooter() {
    const footerHTML = `
    <div class="container">
        <div style="display: flex; justify-content: space-between; flex-wrap: wrap; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 20px; text-align: left;">
            <div style="flex: 1; min-width: 250px; margin-bottom: 15px;">
                <h3 style="color: #E64A19; margin-bottom: 10px; font-size: 1.2rem;">Dental Care</h3>
                <p style="color: #ccc; line-height: 1.6; font-size: 0.9rem;">Nụ cười của bạn là niềm hạnh phúc của chúng tôi.</p>
            </div>
            <div style="flex: 1; min-width: 250px; margin-bottom: 15px;">
                <h3 style="color: #fff; margin-bottom: 10px; font-size: 1.2rem;">Thông Tin</h3>
                <p style="color: #ccc; margin-bottom: 5px; font-size: 0.9rem;"><i class="fas fa-map-marker-alt" style="color: #E64A19;"></i> 123 Cầu Giấy, Hà Nội</p>
                <p style="color: #ccc; font-size: 0.9rem;"><i class="fas fa-phone" style="color: #E64A19;"></i> 0987 654 321</p>
            </div>
        </div>
        <div style="text-align: center; color: #888; font-size: 0.85rem;">
            <p>&copy; 2024 Dental Care. All rights reserved.</p>
        </div>
    </div>
    `;

    // Tìm thẻ footer và chèn nội dung vào
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
}

// Chạy hàm khi trang web tải xong
document.addEventListener("DOMContentLoaded", loadFooter);
