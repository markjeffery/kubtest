FROM node:4.4
EXPOSE 5000
ADD server.js .
ADD package.json .
ADD app.json .
ADD assets/ assets/
ADD routes/ routes/
ADD www/ www/
ADD app.json .
ADD unregister.sh
RUN npm install
CMD node server.js
