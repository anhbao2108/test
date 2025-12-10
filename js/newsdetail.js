document.addEventListener("DOMContentLoaded", function () {

    const newsData = {
        1: {
            title: "5 Cách Chăm Sóc Răng Miệng Tại Nhà Hiệu Quả",
            date: "10/12/2023",
            author: "Bs. Tuấn",
            image: "https://via.placeholder.com/900x450/0056b3/ffffff?text=Dental+Care",

            content: `
                <p>
                    Chăm sóc răng miệng đúng cách không chỉ giúp bạn sở hữu nụ cười tự tin,
                    mà còn đóng vai trò quan trọng trong việc bảo vệ sức khỏe tổng thể.
                    Nhiều bệnh lý răng miệng nếu không điều trị kịp thời có thể gây biến chứng nguy hiểm.
                </p>

                <h2>Vì sao cần chăm sóc răng miệng mỗi ngày?</h2>
                <p>
                    Răng miệng là nơi vi khuẩn dễ sinh sôi nếu không được làm sạch đúng cách.
                    Việc vệ sinh kém có thể dẫn đến sâu răng, viêm lợi, hôi miệng và ảnh hưởng
                    đến tim mạch cũng như hệ tiêu hóa.
                </p>

                <div class="detail-image-inline">
                    <img src="https://via.placeholder.com/800x400/E64A19/ffffff?text=Oral+Health+Care" alt="Chăm sóc răng miệng">
                    <span>Hình ảnh: Quy trình chăm sóc răng miệng đúng cách tại nhà</span>
                </div>

                <h2>5 cách chăm sóc răng miệng hiệu quả tại nhà</h2>
                <ul>
                    <li><strong>Đánh răng đúng cách:</strong> Ít nhất 2 lần mỗi ngày, mỗi lần 2 phút.</li>
                    <li><strong>Sử dụng chỉ nha khoa:</strong> Làm sạch mảng bám ở kẽ răng.</li>
                    <li><strong>Súc miệng:</strong> Dùng dung dịch súc miệng sau khi ăn.</li>
                    <li><strong>Hạn chế đồ ngọt:</strong> Tránh tạo môi trường cho vi khuẩn phát triển.</li>
                    <li><strong>Khám nha khoa định kỳ:</strong> 6 tháng/lần để phát hiện sớm vấn đề.</li>
                </ul>

                <div class="detail-image-inline">
                    <img src="https://via.placeholder.com/800x400/0056b3/ffffff?text=Dental+Checkup" alt="Khám răng định kỳ">
                    <span>Hình ảnh: Khám răng định kỳ giúp phát hiện sớm bệnh lý</span>
                </div>

                <h2>Lời khuyên từ bác sĩ Dental Care</h2>
                <p>
                    Việc hình thành thói quen chăm sóc răng miệng khoa học ngay từ hôm nay
                    sẽ giúp bạn tiết kiệm chi phí điều trị về sau và duy trì sức khỏe răng miệng lâu dài.
                    Nếu có dấu hiệu đau nhức, ê buốt, hãy đến Phòng khám Dental Care để được tư vấn sớm.
                </p>
            `
        },

        2: {
            title: "Khuyến Mãi Tháng 12: Giảm 20% Dịch Vụ Cạo Vôi",
            date: "08/12/2023",
            author: "Admin",
            image: "https://via.placeholder.com/900x450/E64A19/ffffff?text=Promotion",
            content: `
                <p>
                    Dental Care triển khai chương trình ưu đãi đặc biệt nhằm tri ân khách hàng
                    trong tháng 12 với mức giảm 20% cho dịch vụ cạo vôi răng.
                </p>
                <p>Chương trình áp dụng cho tất cả khách hàng khi đặt lịch trước.</p>
            `
        },

        3: {
            title: "Niềng Răng Trong Suốt: Có Phải Là Giải Pháp Phù Hợp?",
            date: "05/12/2023",
            author: "Bs. Lan",
            image: "https://via.placeholder.com/900x450/0056b3/ffffff?text=Invisible+Braces",
            content: `
                <p>
                    Niềng răng trong suốt là phương pháp chỉnh nha hiện đại,
                    được nhiều người lựa chọn nhờ tính thẩm mỹ cao.
                </p>
                <p>
                    Tuy nhiên, phương pháp này đòi hỏi sự tuân thủ nghiêm ngặt theo hướng dẫn của bác sĩ.
                </p>
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
