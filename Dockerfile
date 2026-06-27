FROM node:20-alpine AS builder

WORKDIR /app

COPY app/package*.json ./

RUN npm install

COPY app .


FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 5000

CMD ["npm","start"]