# 🎯 Wayground Live Quiz (Đấu Trường Trắc Nghiệm Trực Tuyến)

Hệ thống thi trắc nghiệm tương tác thời gian thực phong cách **Wayground (Quizizz)**, hỗ trợ **200+ người chơi đồng thời** không giật lag.

---

## 🌟 Điểm Nổi Bật

1. **Cấu Trúc 2 Phần Thi (Mỗi phần 10 câu = 20 câu):**
   - **Phần 1:** Kiến thức Công Nghệ & Kỹ Thuật Số (10 câu).
   - **Nghỉ giữa giờ:** Tổng kết điểm số & bảng xếp hạng chặng 1.
   - **Phần 2:** Thử Thách Logic & Tư Duy Tốc Độ (10 câu).
2. **Khả Năng Chịu Tải 200+ Người Chơi:**
   - Sử dụng **Node.js + Socket.io** với bộ nhớ in-memory siêu tốc, độ trễ dưới 30ms.
   - Có tích hợp sẵn nút **"+50 / +100 Thí Sinh Giả Lập (Bot)"** trong màn hình Quản trò để kiểm tra tải 200 người ngay lập tức mà không cần dùng 200 điện thoại thật.
3. **Mã PIN & Quét Mã QR:**
   - Thí sinh quét QR hoặc nhập mã PIN 6 số trên điện thoại di động là vào thi ngay, không cần đăng ký tài khoản.
4. **Tính Điểm Gamified:**
   - Điểm cơ bản + Điểm thưởng tốc độ (trả lời càng nhanh điểm càng cao) + Chuỗi đúng liên tiếp (Streak flames 🔥).
5. **Bảng Xếp Hạng & Bục Vinh Danh Olympic 3D:**
   - Bảng xếp hạng Top 10 cập nhật thời gian thực sau mỗi câu hỏi.
   - Bục vinh danh Quán Quân, Á Quân, Hạng Ba kèm pháo giấy (Confetti).
   - **Xuất file Excel / CSV** danh sách điểm số và độ chính xác của toàn bộ thí sinh.
6. **Âm Thanh Sống Động:**
   - Tích hợp sẵn hệ thống âm thanh tổng hợp Web Audio API (không cần tải thêm file mp3).

---

## 🚀 Hướng Dẫn Khởi Chạy Nhanh

### Cách 1: Chạy trực tiếp bằng Node.js (Khuyên dùng thử ngay)

1. Mở PowerShell hoặc Terminal tại thư mục `wayground-quiz`:
   ```bash
   cd D:\Desktop\Docker\wayground-quiz
   ```
2. Khởi động máy chủ:
   ```bash
   npm start
   ```
3. Mở trình duyệt:
   * **Màn hình chính:** [http://localhost:5000](http://localhost:5000)
   * Bấm **"Dành Cho Quản Trò (Host)"** để tạo phòng thi và lấy mã PIN / QR Code.
   * Thí sinh mở [http://localhost:5000](http://localhost:5000) (hoặc địa chỉ IP mạng LAN của máy bạn, ví dụ `http://192.168.1.x:5000`) trên điện thoại để tham gia.

---

### Cách 2: Chạy bằng Docker Compose

1. Chạy lệnh:
   ```bash
   docker compose up --build -d
   ```
2. Truy cập hệ thống tại: [http://localhost:5000](http://localhost:5000)
3. Khi muốn dừng:
   ```bash
   docker compose down
   ```

---

## ⚙️ Hướng Dẫn Tùy Chỉnh 20 Câu Hỏi

Toàn bộ 20 câu hỏi (chia làm 2 phần) nằm trong file:
👉 `server/questions.js`

Bạn có thể mở file này để thay đổi câu hỏi, đáp án, thời gian đếm ngược (mặc định 15 giây), điểm số và phần giải thích đáp án.
