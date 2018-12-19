FROM node:8.6-alpine

WORKDIR /usr/src/app

COPY src/package.json /tmp/
RUN cd /tmp && npm install
COPY src /usr/src/app
RUN cp -a /tmp/node_modules /usr/src/app

EXPOSE 3000
CMD node app.js