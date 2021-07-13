FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
#RUN npm install ci- --only=production

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]

