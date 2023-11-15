FROM node:18-alpine3.18

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

WORKDIR /home/app

COPY package*.json ./

RUN npm install bcrypt@5.1.1

RUN rm -rf node_modules
RUN npm cache clean --force
RUN npm install -g npm@latest
RUN npm install
RUN npm rebuild bcrypt

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "npm", "run", "start:dev" ]