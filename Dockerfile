# Multi-stage Dockerfile for Chùa Online 3D Metaverse
FROM node:20-alpine AS builder

WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Production Server
FROM node:20-alpine AS runner

WORKDIR /app
COPY server/package*.json ./server/
RUN cd server && npm install --production

COPY server/ ./server/
COPY --from=builder /app/client/dist ./client/dist

EXPOSE 10000 5000

ENV PORT=10000
ENV NODE_ENV=production

WORKDIR /app/server
CMD ["node", "index.js"]
