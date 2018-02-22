FROM node:latest

WORKDIR /var/www/app/

COPY ./package*.json ./
RUN npm install --quiet

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]