FROM node:18-alpine

WORKDIR /usr/src/app/typescript/

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package*.json /usr/src/app/typescript/
RUN npm install

COPY . /usr/src/app/typescript/

ENV PORT 7000
EXPOSE $PORT
CMD [ "npm", "start" ]
