# ==========================================
# GIAI ĐOẠN 1: Build Frontend (React TypeScript)
# ==========================================
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# ==========================================
# GIAI ĐOẠN 2: Build Backend (Java Spring Boot)
# Đưa toàn bộ file tĩnh của Frontend vào static của Backend
# ==========================================
FROM maven:3.9.6-eclipse-temurin-17 AS backend-builder
WORKDIR /app/backend
COPY backend/pom.xml .
COPY backend/src ./src
# Copy bản build frontend vào thư mục static của Spring Boot
COPY --from=frontend-builder /app/frontend/dist ./src/main/resources/static

RUN mvn clean package -DskipTests -B

# ==========================================
# GIAI ĐOẠN 3: Chạy ứng dụng (Runtime)
# ==========================================
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=backend-builder /app/backend/target/*.jar app.jar

ENV PORT=8080
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
