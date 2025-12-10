document.addEventListener("DOMContentLoaded", function () {

    const newsData = {
        1: {
            title: "5 Cách Chăm Sóc Răng Miệng Tại Nhà",
            date: "10/12/2023",
            author: "Bs. Tuấn",
            image: "https://via.placeholder.com/800x450/0056b3/ffffff?text=Dental+News+1",
            content: `
                <p>Chăm sóc răng miệng đúng cách giúp phòng ngừa sâu răng và các bệnh nha chu.</p>
                <p><strong>1.</strong> Đánh răng ít nhất 2 lần mỗi ngày bằng kem đánh răng có fluor.</p>
                <p><strong>2.</strong> Sử dụng chỉ nha khoa sau bữa ăn.</p>
                <p><strong>3.</strong> Hạn chế đồ ngọt và nước có gas.</p>
                <p><strong>4.</strong> Súc miệng bằng nước muối hoặc dung dịch chuyên dụng.</p>
                <p><strong>5.</strong> Thăm khám nha khoa định kỳ 6 tháng/lần.</p>
            `
        },

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
