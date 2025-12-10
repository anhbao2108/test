// ===== js/newsdetail.js =====

// 1. Kho dữ liệu bài viết (Giả lập Database)
// Mỗi bài viết ứng với 1 ID (1, 2, 3)
const newsDatabase = {
    "1": {
        title: "Hướng dẫn chăm sóc răng miệng sau khi niềng",
        date: "10/12/2023",
        author: "Bs. Tuấn",
        image: "https://via.placeholder.com/800x450/0056b3/ffffff?text=Cham+Soc+Sau+Nieng",
        content: `
            <p class="intro">Niềng răng là giải pháp thẩm mỹ phổ biến, tuy nhiên việc chăm sóc răng miệng trong quá trình này đóng vai trò quyết định đến 50% sự thành công của ca điều trị.</p>
            <h3>1. Vệ sinh răng miệng đúng cách</h3>
            <p>Khi đeo mắc cài, thức ăn rất dễ bám vào kẽ răng và dây cung. Bạn cần sử dụng bàn chải kẽ chuyên dụng và chỉ nha khoa Superfloss để làm sạch.</p>
            <h3>2. Chế độ ăn uống</h3>
            <p>Tránh đồ ăn quá cứng hoặc quá dai. Nên cắt nhỏ thức ăn để giảm áp lực lên mắc cài.</p>
            <blockquote>"Hàm răng đẹp cần sự kiên trì chăm sóc mỗi ngày."</blockquote>
        `
    },
    "2": {
        title: "Ưu đãi giảm 30% dịch vụ bọc răng sứ thẩm mỹ",
        date: "08/12/2023",
        author: "Admin",
        image: "https://via.placeholder.com/800x450/E64A19/ffffff?text=Khuyen+Mai+Boc+Su",
        content: `
            <p class="intro">Chào đón mùa lễ hội, Dental Care mang đến chương trình ưu đãi lớn nhất năm cho dịch vụ răng sứ thẩm mỹ.</p>
            <h3>Chi tiết chương trình</h3>
            <p>Khách hàng đăng ký bọc răng sứ toàn hàm (từ 16 răng trở lên) sẽ được giảm ngay 30% tổng chi phí.</p>
            <h3>Công nghệ Nano 5S</h3>
            <p>Chúng tôi sử dụng công nghệ phủ sứ Nano 5S giúp răng trắng sáng tự nhiên, độ bền lên đến 20 năm.</p>
            <blockquote>"Nụ cười rạng rỡ - Tự tin đón tết."</blockquote>
        `
    },
    "3": {
        title: "Tại sao nên lấy cao răng định kỳ 6 tháng/lần?",
        date: "05/12/2023",
        author: "Bs. Lan",
        image: "https://via.placeholder.com/800x450/0056b3/ffffff?text=Lay+Cao+Rang+Sieu+Am",
        content: `
            <p class="intro">Cao răng là mảng bám vôi hóa cứng đầu, là nơi trú ngụ lý tưởng của vi khuẩn gây hại cho nướu.</p>
            <h3>Tác hại của cao răng</h3>
            <p>Nếu không lấy cao răng định kỳ, bạn sẽ đối mặt với nguy cơ viêm lợi, chảy máu chân răng, hôi miệng và tụt lợi.</p>
            <h3>Công nghệ siêu âm Ultrasonic</h3>
            <p>Dental Care sử dụng máy lấy cao răng siêu âm rung động nhẹ nhàng, làm sạch sâu mà không gây ê buốt hay tổn hại men răng.</p>
        `
    }
};

document.addEventListener("DOMContentLoaded", function() {
    
    // 2. Lấy ID từ URL (Ví dụ: newsdetail.html?id=1 -> Lấy số 1)
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    // Các phần tử HTML cần điền dữ liệu
    const elTitle = document.getElementById('post-title');
    const elDate = document.getElementById('post-date');
    const elAuthor = document.getElementById('post-author');
    const elImage = document.getElementById('post-image');
    const elContent = document.getElementById('post-content');
    const elContainer = document.querySelector('.detail-container');

    // 3. Kiểm tra và Hiển thị dữ liệu
    if (postId && newsDatabase[postId]) {
        // Lấy dữ liệu từ kho
        const data = newsDatabase[postId];

        // Điền vào HTML
        elTitle.textContent = data.title;
        elDate.textContent = data.date;
        elAuthor.textContent = data.author;
        elImage.src = data.image;
        elImage.style.display = 'block'; // Hiện ảnh lên
        elContent.innerHTML = data.content; // Render HTML nội dung

        // Đổi title của tab trình duyệt
        document.title = data.title + " - Dental Care";

    } else {
        // Trường hợp không tìm thấy bài viết hoặc không có ID
        elTitle.textContent = "Không tìm thấy bài viết!";
        elContent.innerHTML = "<p>Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa. Vui lòng quay lại trang tin tức.</p>";
        elImage.style.display = 'none';
    }

    // 4. Hiệu ứng Fade-in (Animation)
    setTimeout(() => {
        elContainer.classList.add('visible');
    }, 100);
});
