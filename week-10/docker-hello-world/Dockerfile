FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY app.js .
EXPOSE 5500
CMD [ "npm", "start" ]
