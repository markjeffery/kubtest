FROM node:4.4
EXPOSE 8080
EXPOSE 8090
COPY server.js .
COPY appd.tar.gz .
RUN tar xzf appd.tar.gz
CMD node server.js
