# Use the official Node.js image as the base
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5002

CMD ["npm", "start"]