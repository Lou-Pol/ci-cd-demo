FROM node:22-alpine

WORKDIR /app

RUN apk upgrade --no-cache zlib

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
