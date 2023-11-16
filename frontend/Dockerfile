FROM node:18-alpine3.18

WORKDIR /home/app

COPY package*.json ./

RUN rm -rf node_modules
RUN npm install

COPY  . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "run","dev"]