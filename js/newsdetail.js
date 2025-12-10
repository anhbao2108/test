document.addEventListener("DOMContentLoaded", function () {

    const newsData = {
        1: {
            title: "5 Cách Chăm Sóc Răng Miệng Tại Nhà",
            date: "10/12/2023",
            author: "Bs. Tuấn",
            image: "https://via.placeholder.com/800x450/0056b3/ffffff?text=Dental+News+1",
           content: `
    <p>Chăm sóc răng miệng đúng cách không chỉ giúp bạn có nụ cười đẹp mà còn phòng tránh được nhiều bệnh lý nguy hiểm liên quan đến răng và nướu.</p>

    <h2>Tại sao chăm sóc răng miệng lại quan trọng?</h2>
    <p>Răng miệng là cửa ngõ của hệ tiêu hóa. Nếu không được vệ sinh đúng cách, vi khuẩn sẽ phát triển gây sâu răng, viêm nướu và ảnh hưởng đến sức khỏe tổng thể.</p>

    <h2>5 cách chăm sóc răng miệng hiệu quả tại nhà</h2>
    <ul>
        <li><strong>Đánh răng đúng cách:</strong> Ít nhất 2 lần/ngày với kem đánh răng có fluor.</li>
        <li><strong>Dùng chỉ nha khoa:</strong> Làm sạch kẽ răng nơi bàn chải không chạm tới.</li>
        <li><strong>Súc miệng:</strong> Sử dụng dung dịch súc miệng chuyên dụng.</li>
        <li><strong>Hạn chế đồ ngọt:</strong> Giảm nguy cơ hình thành axit gây sâu răng.</li>
        <li><strong>Khám nha khoa định kỳ:</strong> Giúp phát hiện sớm các vấn đề.</li>
    </ul>

    <h2>Lời khuyên từ bác sĩ</h2>
    <p>Thói quen chăm sóc răng miệng mỗi ngày chính là khoản đầu tư lâu dài cho sức khỏe. Nếu bạn có bất kỳ vấn đề nào, hãy đến Dental Care để được tư vấn kịp thời.</p>
     `
        },
`


        2: {
            title: "Khuyến Mãi Tháng 12: Giảm 20% Cạo Vôi",
            date: "08/12/2023",
            author: "Admin",
            image: "https://via.placeholder.com/800x450/E64A19/ffffff?text=Dental+News+2",
            content: `
                <p>Nhằm tri ân khách hàng cuối năm, Dental Care triển khai chương trình ưu đãi đặc biệt.</p>
                <p> Giảm ngay 20% dịch vụ cạo vôi răng.</p>
                <p> Áp dụng trong tháng 12.</p>
                <p> Số lượng ưu đãi có hạn.</p>
            `
        },

        3: {
            title: "Niềng Răng Trong Suốt: Nên Hay Không?",
            date: "05/12/2023",
            author: "Bs. Lan",
            image: "https://via.placeholder.com/800x450/0056b3/ffffff?text=Dental+News+3",
            content: `
                <p>Niềng răng trong suốt là giải pháp chỉnh nha hiện đại.</p>
                <p><strong>Ưu điểm:</strong> Thẩm mỹ cao, tháo lắp dễ dàng.</p>
                <p><strong>Nhược điểm:</strong> Chi phí cao hơn, cần tuân thủ nghiêm ngặt.</p>
                <p>Bác sĩ sẽ tư vấn phương pháp phù hợp nhất cho bạn.</p>
            `
        }
    };

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (newsData[id]) {
        document.getElementById("detail-title").innerText = newsData[id].title;
        document.getElementById("detail-date").innerText = newsData[id].date;
        document.getElementById("detail-author").innerText = newsData[id].author;
        document.getElementById("detail-image").src = newsData[id].image;
        document.getElementById("detail-content").innerHTML = newsData[id].content;
    }
});
 
