FROM node:4.4
EXPOSE 8080
COPY server.js .
COPY package.json .
RUN npm install
CMD node server.js
