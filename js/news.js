// KHO DỮ LIỆU BÀI VIẾT (Giả lập Database)
// ID ở đây phải khớp với ?id=1, ?id=2 trong file news.html
const newsData = {
    "1": {
        title: "5 Cách Chăm Sóc Răng Miệng Tại Nhà",
        date: "10/12/2023",
        author: "Bs. Tuấn",
        image: "https://via.placeholder.com/800x450/0056b3/ffffff?text=Cham+Soc+Rang+Mieng",
        content: `
            <p><strong>Chăm sóc răng miệng</strong> đúng cách không chỉ giúp bạn có nụ cười tự tin mà còn ngăn ngừa các bệnh lý nguy hiểm.</p>
            <h3>1. Đánh răng đúng kỹ thuật</h3>
            <p>Nên đánh răng ít nhất 2 lần/ngày. Đặt bàn chải nghiêng 45 độ so với viền nướu và chải nhẹ nhàng theo chiều dọc.</p>
            <h3>2. Sử dụng chỉ nha khoa</h3>
            <p>Chỉ nha khoa giúp loại bỏ thức ăn thừa ở kẽ răng nơi bàn chải không tới được.</p>
            <blockquote>"Hàm răng khỏe mạnh là khởi đầu của một sức khỏe tốt."</blockquote>
            <p>Hãy duy trì thói quen khám răng định kỳ 6 tháng/lần tại Dental Care.</p>
        `
    },
    "2": {
        title: "Khuyến Mãi Tháng 12: Giảm 20% Cạo Vôi",
        date: "08/12/2023",
        author: "Admin",
        image: "https://via.placeholder.com/800x450/E64A19/ffffff?text=Khuyen+Mai+Thang+12",
        content: `
            <p>Chào đón mùa lễ hội cuối năm, <strong>Dental Care</strong> gửi tặng quý khách hàng chương trình ưu đãi đặc biệt.</p>
            <h3>Chi tiết ưu đãi</h3>
            <ul>
                <li>Giảm <strong>20%</strong> dịch vụ cạo vôi răng.</li>
                <li>Giảm <strong>10%</strong> dịch vụ trám răng thẩm mỹ.</li>
                <li>Miễn phí khám và tư vấn tổng quát.</li>
            </ul>
            <p>Chương trình áp dụng từ ngày 01/12 đến hết 31/12. Nhanh tay đặt lịch ngay hôm nay!</p>
        `
    },
    "3": {
        title: "Niềng Răng Trong Suốt: Nên Hay Không?",
        date: "05/12/2023",
        author: "Bs. Lan",
        image: "https://via.placeholder.com/800x450/0056b3/ffffff?text=Nieng+Rang+Trong+Suot",
        content: `
            <p>Niềng răng trong suốt (Invisalign) đang là xu hướng được nhiều người lựa chọn nhờ tính thẩm mỹ cao.</p>
            <h3>Ưu điểm vượt trội</h3>
            <p>Khay niềng gần như vô hình, giúp bạn tự tin giao tiếp. Ngoài ra, khay có thể tháo lắp dễ dàng khi ăn uống và vệ sinh.</p>
            <h3>Đối tượng phù hợp</h3>
            <p>Phương pháp này phù hợp với hầu hết các trường hợp răng hô, móm, lệch lạc mức độ nhẹ đến trung bình.</p>
        `
    }
};

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Lấy ID từ thanh địa chỉ (URL)
    // Ví dụ: newsdetail.html?id=1 -> Lấy được số "1"
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    // Các thẻ HTML cần điền nội dung
    const titleEl = document.getElementById('detail-title');
    const dateEl = document.getElementById('detail-date');
    const authorEl = document.getElementById('detail-author');
    const imgEl = document.getElementById('detail-img');
    const contentEl = document.getElementById('detail-content');

    // 2. Kiểm tra ID và điền dữ liệu
    if (id && newsData[id]) {
        const post = newsData[id];

        // Điền thông tin
        titleEl.textContent = post.title;
        
        // Giữ lại icon khi điền text
        dateEl.innerHTML = `<i class="far fa-calendar-alt"></i> ${post.date}`;
        authorEl.innerHTML = `<i class="far fa-user"></i> ${post.author}`;
        
        // Hiện ảnh
        imgEl.src = post.image;
        imgEl.style.display = 'inline-block';

        // Điền nội dung HTML
        contentEl.innerHTML = post.content;

        // Đổi title của tab trình duyệt
        document.title = post.title + " - Dental Care";

    } else {
        // Nếu không tìm thấy bài viết
        titleEl.textContent = "Không tìm thấy bài viết!";
        contentEl.innerHTML = "<p>Bài viết không tồn tại hoặc đường dẫn bị lỗi. Vui lòng quay lại trang tin tức.</p>";
        imgEl.style.display = 'none';
    }
});
