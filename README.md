# TaskHub Pro - Ứng Dụng Quản Lý Công Việc Chuẩn 3 Tầng

Ứng dụng web mẫu hoàn chỉnh với kiến trúc 3 tầng (3-Tier Enterprise Architecture):
- **Frontend:** React 19 + TypeScript (`.tsx`) + Vite + Dark Glassmorphism UI
- **Backend:** Java 17 + Spring Boot 3 (REST API + Spring Data JPA + Validation)
- **Database:** MySQL 8.0 (Quan hệ `User` - `Todo`, tự động sinh bảng)
- **Containerization:** Docker & Docker Compose

---

## 📁 Cấu Trúc Dự Án

```
group-chat/
├── backend/                   # Backend Java Spring Boot
│   ├── src/main/java/         # Mã nguồn Java (Controllers, Services, Repositories, Entities, DTOs)
│   ├── src/main/resources/    # Cấu hình application.properties (kết nối MySQL)
│   ├── pom.xml                # Quản lý thư viện Maven
│   └── Dockerfile             # Multi-stage build cho Spring Boot JAR
│
├── frontend/                  # Frontend React TSX
│   ├── src/                   # App.tsx, api.ts, types.ts, App.css, index.css
│   ├── package.json           # Thư viện npm
│   ├── tsconfig.json          # Cấu hình TypeScript
│   └── Dockerfile             # Build và phục vụ qua Nginx
│
├── docker-compose.yml         # Khởi chạy đồng bộ 3 dịch vụ: MySQL, Backend, Frontend
└── README.md
```

---

## 🚀 Cách 1: Khởi Chạy Tự Động Toàn Bộ Bằng Docker (Khuyên Dùng)

Chỉ cần bật Docker Desktop trên máy và gõ 1 lệnh duy nhất tại thư mục `group-chat`:

```bash
docker compose up --build
```

Sau khi các container khởi động:
- **Giao diện Web (Frontend):** [http://localhost:3000](http://localhost:3000)
- **API Server (Backend):** [http://localhost:8080/api](http://localhost:8080/api)
- **Cơ sở dữ liệu MySQL:** Host `localhost`, Port `3307`, Database `tododb`, User `todouser`, Password `todopassword`

---

## 🛠️ Cách 2: Chạy Thủ Công Từng Phần Để Lập Trình & Debug

### 1. Database (MySQL):
Tạo một database tên `tododb` trên MySQL của bạn:
```sql
CREATE DATABASE tododb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 2. Backend (Spring Boot):
Chỉnh sửa mật khẩu MySQL trong [backend/src/main/resources/application.properties](file:///D:/Desktop/Docker/group-chat/backend/src/main/resources/application.properties) nếu cần, sau đó chạy:
```bash
cd backend
mvn spring-boot:run
```
Backend sẽ khởi động tại cổng `http://localhost:8080`.

### 3. Frontend (React TSX):
```bash
cd frontend
npm run dev
```
Truy cập giao diện tại [http://localhost:5173](http://localhost:5173).
