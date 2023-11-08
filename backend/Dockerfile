FROM node:18-alpine3.18

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

WORKDIR /home/app

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "npm", "run", "start:dev" ]