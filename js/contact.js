document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn chặn load lại trang

            // Lấy dữ liệu (Demo)
            const name = document.getElementById('fullname').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;

            // Kiểm tra cơ bản
            if(name && phone) {
                // Giả lập gửi thành công
                alert(`Cảm ơn ${name}! \nChúng tôi đã nhận được yêu cầu đặt lịch của bạn.\nSố điện thoại: ${phone}\nDịch vụ: ${service || 'Chưa chọn'}\nNhân viên sẽ gọi lại trong ít phút.`);
                
                // Reset form
                bookingForm.reset();
            } else {
                alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
            }
        });
    }
});
