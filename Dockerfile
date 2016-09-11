FROM node:4.4
EXPOSE 8080
COPY server.js .
RUN npm install appdynamics@next
CMD node server.js
