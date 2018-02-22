FROM node:latest
MAINTAINER Ken Vilar <kenvilar@gmail.com>

WORKDIR /var/www/app/

COPY ./package*.json ./
RUN npm install --quiet

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]