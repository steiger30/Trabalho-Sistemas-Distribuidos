FROM node:20-alpine3.17

WORKDIR /home/app

COPY package*.json ./

RUN rm -rf node_modules

RUN npm install

COPY  . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "run","dev"]