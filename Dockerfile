FROM node:18-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --production

COPY server.js ./
COPY public ./public

ENV PORT=10000
EXPOSE 10000 3000

CMD ["node", "server.js"]
